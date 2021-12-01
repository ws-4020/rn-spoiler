# RN Spoiler

[Expo](https://expo.io/) の [expo-template-bare-typescript](https://github.com/expo/expo/tree/sdk-41/templates/expo-template-bare-typescript) をベースにした React Native のテンプレートです。

## 前提条件

- [React Native の開発環境が構築](https://reactnative.dev/docs/environment-setup)されていること
  - **必ず「React Native CLI Quickstart」というタブをクリック**して、手順を実施してください。
  - 「Development OS」は、開発に利用している OS を選択してください。
  - （macOS のみ）「Target OS」は、「iOS」「Android」の両方の手順を実施してください。

## 注意事項

`react-native-cli` がグローバルにインストールされていると、テンプレートからの新規プロジェクトの作成に失敗します。 次のコマンドでインストール状況を確認できます。

```shell
npm ls -g --depth=0
```

実行結果の例:

```console
$ npm ls -g --depth=0
<path/to/npm/lib>
├── expo-cli@3.28.5
├── npm@6.14.8
└── react-native-cli@2.0.1
```

## 使い方

### 新規プロジェクトの作成

次のコマンドを実行して、新規プロジェクトを作成できます。

```bash
npx react-native init --template https://github.com/ws-4020/rn-spoiler.git <YourAppName>
```

`<YourAppName>` に設定した名前でディレクトリが作成されます。

正しく生成できていることを確認するために、次のコマンドを実行してアプリが正しく起動することを確認してください。

```bash
npm run ios        # iPhoneシミュレータが起動します
npm run android    # Androidエミュレータが起動します
```

npm 7で`peerDependencies`の扱いが変更された影響で、npm 7でRN Spoilerをテンプレートとしてプロジェクトを作成すると次のようなエラーが発生する可能性があります。

```console
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: undefined@undefined
npm ERR! Found: @babel/core@7.9.6
npm ERR! node_modules/@babel/core
npm ERR!   dev @babel/core@"~7.9.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peerOptional @babel/core@">=7.11.0" from eslint-config-universe@7.0.1
npm ERR! node_modules/eslint-config-universe
npm ERR!   dev eslint-config-universe@"^7.0.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```

このエラーが発生した場合は次の手順でリカバリしてください。

1. `cd <YourAppName>`（`<YourAppName>`は実際に作成したときの値に変更してください）
2. `npm install --legacy-peer-deps`
3. （macOSの場合のみ） `npx pod-install`

### `debug.keystore` ファイルについて

RN Spoilerでは新規プロジェクトの作成時に、自動的に`debug.keystore`を作成します。

ただし、新規プロジェクトを作成した環境にJDKがインストールされていないなど、[`keytool`](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html)が実行できなかった場合は、`debug.keystore`を作成することができません。

このような場合は`npm run android`を実行する前に、`debug.keystore`を作成する必要があります。プロジェクトのルートディレクトリで、次のコマンドを実行して`debug.keystore`を作成してください。コマンドの実行にはJDKがインストールされている必要があります。

```bash
keytool -genkey -v -keystore android/app/debug.keystore -storepass android -alias androiddebugkey -keypass android -dname "CN=Android Debug,O=Android,C=US"
```

## `expo-template-bare-typescript` からの変更点

- [x] デフォルトでは`expo-update`を無効化
- [x] Editorconfig, ESLint, Prettierを追加
- [x] TypeScriptの設定ファイルを修正、`tsc`での型チェックをlintに追加
- [x] Androidでデフォルトで要求するパーミッションの最小化
- [x] `App.tsx`を`src`ディレクトリ配下に移動
- [x] 開発者ごとに簡単にSigningできるように、Signing情報を記述するテンプレートファイルをiOSのビルド設定に追加
- [x] UIライブラリとして[React Native Elements](https://reactnativeelements.com/)を追加
- [x] ナビゲーションに[React Navigation](https://reactnavigation.org/)を追加、画面を修正
- [x] React Native の使い方ページを、 [react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript) から追加。
  - `src/screens/instructions/Instructions.tsx` は、[react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript) に含めて配布されている [`App.tsx`](https://github.com/react-native-community/react-native-template-typescript/blob/60690d1f7f3c2856d4c7129fd972400452c9510d/template/App.tsx) を利用しています。
- [x] Jestの設定を`jest.config.js`に移動し、`react-navigation`と`react-native-screens`に必要なネイティブモジュールをモック化
- [x] `src`ディレクトリを基準とした絶対パスで`import`できるように変更
- [x] プロジェクト作成後に自動的に必要なファイルを作成するように変更
- [x] キャッシュを削除するためのスクリプトを追加
- [x] React Navigation用のデフォルトの型定義を追加
