# Hello World

## React Native開発環境の構築

- [Setting up the development environment - React Native](https://reactnative.dev/docs/environment-setup)を参考に開発環境を構築してください。
  - **必ず「React Native CLI Quickstart」というタブをクリック**して、手順を実施してください。
  - インストールするNode.jsのバージョンはLTSバージョンとしてください。
    - WindowsでChocolateyでインストールする場合は、 `node-lts` パッケージをおすすめします。
  - 「Development OS」は、開発に利用している OS を選択してください。
  - （macOS のみ）「Target OS」は、「iOS」「Android」の両方の手順を実施してください。

## アプリをビルドしてiOSデバイスにインストールする

1. `ios/PersonalAccount.xcconfig.template` を `ios/PersonalAccount.xcconfig` としてコピーしてください。
2. ファイルに記載されている設定値を、それぞれ次のように設定してください。
   * `CODE_SIGN_STYLE`: Automatic
   * `PERSONAL_IDENTIFIER`: 他の人とかぶらない、何らかの一意の値
   * `DEVELOPMENT_TEAM`: 個人のApple IDに割り当てられたID
3. ルートディレクトリで`xed ios -b`と実行して、Xcodeでプロジェクトを開いてください。
4. Xcode上で署名情報を確認し、エラーが発生していないことを確認してください
5. ルートディレクトリで次のコマンドを実行してください。`<device name>`はインストール先のiOSデバイス名です。
   * `npm run ios -- --device='<device name>'`
   * デバイス名、シミュレータ名の一覧は `xcrun xctrace list devices` で取得することができます。

### 個人のApple IDでのチームIDの確認方法

まず、XcodeからApple IDでログインし、開発用の証明書を作成します。

1. Xcodeでアカウントの設定画面を開き、必要ならログインします。
   * Xcode 12では、「Preferences」＞「Accounts」でアカウントの設定画面を開けます
   * ログインする場合、左下の「＋」ボタンをクリックしてログインます。
2. 利用するApple IDを選択状態にし、右側のチーム一覧で「<自分の氏名> (Personal Team)」と書かれているチームを選択します。
   * Apple Developer Programなどに登録されているユーザの場合、Apple Developer Programのデベロッパー名なども表示されるため、複数のチームが表示されます。
3. 「Personal Team」を選択した状態で「Manage Certificates」をクリックします。
4. 「Apple Development Certificates」に証明書がリストされていることを確認します。
   * 証明書が表示されない場合は、左下の「＋」ボタンを押して証明書を作成してください。

次に、「キーチェーンアクセス」を開き、開発用の証明書を確認します。

1. 「キーチェーンアクセス」を開き、左上のキーチェーン一覧から「ログイン」を選択します。
2. 「分類」の「証明書」を選択し、ログインキーチェーンに保存されている証明書の一覧を表示します。
3. 「Apple Development: <Apple IDのメールアドレス> (xxxxxxxxxx)」という名前の証明書をダブルクリックし、情報を表示します。
4. 表示された情報の中の「部署」に設定されている文字列がチームIDです。
