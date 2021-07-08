/**
 * rn-spoilerをテンプレートとして、学習コンテンツの内容を適用したアプリの作成
 * 引数、オプションについては--helpにて参照
 **/

const program = require('commander');
const { exec, spawn } = require('child_process');
const fs = require('fs');

// メイン処理の実行
main();

async function main() {

  try {
    // 第一引数 アプリ名
    let appName;
    // オプションの定義
    program
      .version(
        '0.0.1',
        '-v, --version'
      )
      .argument('[appName]', 'app name (optional)', 'HandsOnApp')
      .option(
        '-s, --skip-patch-file-num <number>',
        'Patch file number to skip applying to the app (skip patch file application after the specified patch file number)',
      )
      .option(
        '-b, --backend-ip-adress <value>',
        'Backend Server IP address',
        'localhost'
      )
      .action((argAppName) => {
        appName = argAppName;
      })
      .parse(process.argv);

    // オプションの取得
    const options = program.opts();

    // アプリ作成処理開始
    outputLog(`Start creating ${appName}.`);

    // `generated`ディレクトリが存在しない場合は作成
    const generatedDir = `${__dirname}/generated`;
    if (!fs.existsSync(generatedDir)) {
      // ディレクトリ作成
      fs.mkdirSync(generatedDir);
    }

    // 新規アプリのルートディレクトリ
    const appDir = `${generatedDir}/${appName}`;

    // すでにアプリが存在していた場合は削除
    if (fs.existsSync(appDir)) {
      // ディレクトリ削除
      fs.rmdirSync(appDir, { recursive: true });
    }

    // rn-spoilerをテンプレートとして、新規アプリを作成
    await execute(generatedDir, `npx react-native init --npm --template https://github.com/ws-4020/rn-spoiler.git ${appName}`);

    // npm7以上の場合は、エラーが発生するので対処
    // https://github.com/ws-4020/rn-spoiler#%E6%96%B0%E8%A6%8F%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90
    const npmVersion = await getNpmVersion();
    if (7 <= parseFloat(npmVersion)) {
      outputLog(`Reinstall using legacy-peer-deps for npm version 7 or later.`);
      await execute(appDir, `npm install --legacy-peer-deps`);
      await execute(appDir, `npx pod-install`);
    }

    // コマンドの実行
    await execute(appDir, `git init`);
    await execute(appDir, `git add .`);
    await execute(appDir, `git commit -m "initial commit"`);

    // パッチファイルを適用
    const patchesDir = `${__dirname}/patches`;

    for (const patchFileName of fs.readdirSync(patchesDir)) {
      // パッチファイル番号を取得
      const pathFileNum = getPatchFileNum(patchFileName);
      // --skip-patch-file-numオプション値が適用するパッチファイル番号より大きい場合にパッチファイルを適用
      if (!options.skipPatchFileNum || pathFileNum < options.skipPatchFileNum) {
        // git apply実行時、open-api-generatorによる自動生成コードに対して
        // trailing whitespaceの警告メッセージが出力されないように--whitespaceオプションを付与する
        await execute(appDir, `git apply --whitespace=nowarn ../../patches/${patchFileName}`);
        await execute(appDir, `git add .`);
        await execute(appDir, `git commit -m "apply ${patchFileName}."`);
      } else {
        outputLog(`Skipped applying the following patch file. [${patchFileName}]`);
      }
    }

    // コマンドの実行
    await execute(appDir, `npm i`);
    await execute(appDir, `npx pod-install`);

    // コマンドの実行
    await execute(appDir, `git add package-lock.json`);
    await execute(appDir, `git commit -m "update package-lock.json"`);

    // バックエンド接続先IPアドレスの置換
    // --backend-ip-adressオプションで指定したIPアドレスでsrc/backend/config.tsのIPアドレス部分を置換（デフォルト値：localhost）
    const backendIpAdress = options.backendIpAdress;
    // src/backend/config.tsのパス
    const backendConfigTs = `${appDir}/src/backend/config.ts`
    if (fs.existsSync(backendConfigTs)) {
      // 置換処理
      // fs.readFileSync()にてファイル内容を一括で読み込んでいる理由は以下のとおり。
      //   - 入出力が同じファイル（streamで処理できない）
      //   - 該当ファイルが数行の小さいファイルである
      fs.writeFileSync(
        backendConfigTs,
        fs.readFileSync(backendConfigTs).toString().replace(/{{{LOCALHOST}}}/g, backendIpAdress)
      );
      // コマンドの実行
      await execute(appDir, `git add src/backend/config.ts`);
      await execute(appDir, `git commit -m "rewritten the Backend Server IP address in src/backend/config.ts"`);
      outputLog(`Replaced the Backend Server IP address in src/backend/config.ts with [${backendIpAdress}].`);
  
    }

    // 処理終了
    outputLog(`Successfully created ${appName}.`);
 
  } catch (e) {
    outputLog(`Error occurred. exit code: ${e}`);
  }
}

/**
 * パッチファイル名からパッチファイル番号を取得し返却する
 * 例：01-welcome.patch -> 1
 * @param {*} fileName 
 * @returns 
 */
function getPatchFileNum(fileName) {
  return parseInt(fileName.split("-")[0]);
}

/**
 * 標準出力を行う
 * @param {*} str 
 */
function outputLog(str) {
  console.log(str);
}

/**
 * コマンドを実行する
 * @param {*} cwd 
 * @param {*} cmd 
 * @returns 
 */
function execute(cwd, cmd) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, { shell: true, cwd: cwd });
    proc.stdout.on('data', (data) => {
      outputLog(data.toString());
    });
    proc.stderr.on('data', (data) => {
      outputLog(data.toString());
    });
    proc.stderr.on('error', (error) => {
      outputLog(`stderr: ${error}`);
      reject(error);
    });
    proc.on('exit', (code) => {
      if (code !== 0) {
        outputLog(`Command failed. cmd: [${cmd}] code: [${code}]`);
        reject(code);
      } else {
        resolve(code);
      }
    });
  })
}

/**
 * 「npm -v」を実行した結果のインストールされているnpmのバージョンを返却する
 * @returns 
 */
function getNpmVersion() {
  return new Promise((resolve) => {
    exec(`npm -v`, (error, stdout, stderr) => {
      resolve(stdout);
    });
  });
}
