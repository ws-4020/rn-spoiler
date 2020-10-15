---
title: iOS
---


## Apple IDの設定

アプリをiOSの実機でデバッグする前に以下の設定が必要です。

1. Apple ID設定用のファイルを用意
   ```
   cp ios/PersonalAccount.xcconfig.template ios/PersonalAccount.xcconfig
   ```
2. `ios/PersonalAccount.xcconfig`にApple IDの設定を追加
   * `CODE_SIGN_STYLE` は `Automatic` に設定
   * `PERSONAL_IDENTIFIER` は他の人と重複しない値に設定（Bundle Identiferのサフィックスとして利用されます）
   * `DEVELOPMENT_TEAM` は、Xcodeで個人のApple IDをTEAMとして設定したときに表示される値を設定

## Xcodeを使わずにCLIで実機デバッグする

### 事前準備

- 前述の「Apple IDの設定」を実施
- [ios-deploy](https://github.com/ios-control/ios-deploy)をインストール （`brew install ios-deploy`, `npm i -g ios-deploy`などのコマンドでインストールできます）
- Xcodeで、`ios`フォルダを開く（アプリのルートフォルダ配下で`xed ios`を実行すると開けます）
- プロジェクトの`Signing & Caperbilities` > `Debug`を開いて、 Singingでエラーが出ていないことを確認する

### 手順

- MacOS端末にiPhoneをUSBで接続する
- 接続時にiPhone側でデバイスを信頼するか聞かれるので「信頼する」を選択
- `npm run ios -- --device '<デバイス名>'`を実行
- 上記のかわりに `npm run ios -- --udid <device udid>`でも可
