---
title: iOS
---


### Apple IDの設定

アプリをiOSの実機でデバッグする前に以下の設定が必要です。

1. Apple ID設定用のファイルを用意
   ```
   cp ios/PersonalAccount.xcconfig.template ios/PersonalAccount.xcconfig
   ```
2. `ios/PersonalAccount.xcconfig`にApple IDの設定を追加
   * `CODE_SIGN_STYLE` は `Automatic` に設定
   * `PERSONAL_IDENTIFIER` は他の人と重複しない値に設定（Bundle Identiferのサフィックスとして利用されます）
   * `DEVELOPMENT_TEAM` は、Xcodeで個人のApple IDをTEAMとして設定したときに表示される値を設定
