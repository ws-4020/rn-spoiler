/**
 * rn-spoilerをテンプレートとして、学習コンテンツの内容を適用したアプリの作成
 * 第一引数：アプリ名(Optional. デフォルト値:HandsOnApp)
 **/

const program = require('commander');
const { spawn } = require('child_process');
const fs = require('fs');

// メイン処理の実行
main();

async function main() {
  // オプションの定義
  let backendIpAdress = await getLocalIpAdress(); // バックエンド接続先IPアドレスのデフォルト値を取得
  program
    .version(
      '0.0.1',
      '-v, --version'
    )
    .option(
      '-s, --skip-patch-file-num <number>',
      'Patch file number to skip applying to the app (skip patch file application after the specified patch file number)',
      undefined
    )
    .option(
      '-b, --backend-ip-adress <value>',
      'Backend connection IP address',
      backendIpAdress
    )
    .parse(process.argv);

  // オプションの取得
  const options = program.opts();

  // 第一引数:アプリ名を取得
  const appName = program.args[0] ?? "HandsOnApp";

  // アプリ作成処理開始
  outputLog(`Start creating ${appName}.`);

  // `generated`ディレクトリが存在しない場合は作成
  const generetedDir = `${__dirname}/generated`;
  if (!fs.existsSync(generetedDir)) {
    // ディレクトリ作成
    fs.mkdirSync(generetedDir);
  }

  // 新規アプリのルートディレクトリ
  const appDir = `${generetedDir}/${appName}`;

  // すでにアプリが存在していた場合は削除
  if (fs.existsSync(appDir)) {
    // ディレクトリ削除
    fs.rmdirSync(appDir, { recursive: true });
  }

  // rn-spoilerをテンプレートとして、新規アプリを作成
  await execute(generetedDir, `npx react-native init --npm --template https://github.com/ws-4020/rn-spoiler.git ${appName}`);

  // TODO npm7以上の場合は、エラーが発生するので対処
  // NPM_VERSION=$(npm -v)
  // npm7以上の場合は、エラーが発生するので対処
  // https://github.com/ws-4020/rn-spoiler#%E6%96%B0%E8%A6%8F%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90
  // if [ ${NPM_VERSION:0:1} -ge 7 ]; then
  //   echo "Reinstall using legacy-peer-deps for npm version 7 or later."
  //   npm install --legacy-peer-deps
  //   npx pod-install
  // fi

  // git init
  // git add .
  // git commit -m "initial commit"
  // execute(`cd ${appDir} && git init && git add . && git commit -m "initial commit"`);
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
      // execute(`cd ${appDir} && git apply ../../patches/${patchFileName} && git add . && git commit -m "apply ${patchFileName}."`);
      await execute(appDir, `git apply ../../patches/${patchFileName}`);
      await execute(appDir, `git add .`);
      await execute(appDir, `git commit -m "apply ${patchFileName}."`);
    } else {
      outputLog(`Skipped applying the following patch file. [${patchFileName}]`);
    }
  }

  // npm i
  // npx pod-install
  // execute(`cd ${appDir} && npm i && npx pod-install`);
  await execute(appDir, `npm i`);
  await execute(appDir, `npx pod-install`);

  // git add package-lock.json 
  // git commit -m "update package-lock.json"
  // execute(`cd ${appDir} && git add package-lock.json && git commit -m "update package-lock.json"`);
  await execute(appDir, `git add package-lock.json`);
  await execute(appDir, `git commit -m "update package-lock.json"`);

  // バックエンド接続先IPアドレスの置換
  // --backend-ip-adressオプションで指定したIPアドレスでsrc/backend/config.tsのIPアドレス部分を置換（デフォルト値：ローカルのIPアドレス）
  if (options.backendIpAdress) {
    backendIpAdress = options.backendIpAdress;
    // src/backend/config.tsのパス
    const backendConfigTs = `${appDir}/src/backend/config.ts`
    if (fs.existsSync(backendConfigTs)) {
      // 置換処理
      fs.writeFileSync(
        backendConfigTs,
        fs.readFileSync(backendConfigTs).toString().replace(/{{{LOCALHOST}}}/g, backendIpAdress)
      );
      // git add git commit
      await execute(appDir, `git add src/backend/config.ts`);
      await execute(appDir, `git commit -m "update src/backend/config.ts"`);
      outputLog(`Replaced the backend connection IP address in src/backend/config.ts with [${backendIpAdress}].`);
    }
  }

  // 処理終了
  outputLog(`Successfully created ${appName}.`);
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
      outputLog(`${data.toString()}`);
    });
    proc.stderr.on('error', (error) => {
      outputLog(`stderr: ${error}`);
      reject(error);
    });
    proc.on('exit', (code) => {
      if (code !== 0) {
        reject(data);
      } else {
        resolve(code);
      }
    });
  })
}

/**
 * ローカルのIPアドレスを取得し返却する
 * @returns 
 */
function getLocalIpAdress() {
  return new Promise((resolve) => {
    require("dns").lookup(require("os").hostname(), (err, add, fam) => {
      resolve(add);
    });
  })
}
