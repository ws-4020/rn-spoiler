# RN Spoiler

[Expo](https://expo.io/) の [expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript) をベースにした React Native のテンプレートです。

## 前提条件

- [React Native の開発環境が構築](https://reactnative.dev/docs/environment-setup)されていること
  - **必ず「React Native CLI Quickstart」というタブをクリック**して、手順を実施してください。
  - 「Development OS」は、開発に利用している OS を選択してください。
  - （macOS のみ）「Target OS」は、「iOS」「Android」の両方の手順を実施してください。

## 使い方

### 新規プロジェクトの作成

次のコマンドを実行して、新規プロジェクトを作成できます。

```bash
expo init -t https://github.com/ws-4020/rn-spoiler.git <YourAppName>
```

`<YourAppName>` に設定した名前でディレクトリが作成されて、Git リポジトリとして初期化されます。Git リポジトリにする必要がない場合は`.git`ディレクトリを削除してください。
また、テンプレートプロジェクト自体のために`.github`ディレクトリを用意していますが、プロジェクトで不要であれば削除してください。

正しく生成できていることを確認するために、次のコマンドを実行してアプリが正しく起動することを確認してください。

```bash
npm run ios        # iPhoneシミュレータが起動します
npm run android    # Androidエミュレータが起動します
```

プロジェクトを作成したら、[開発者向けガイド](docs)を参考に開発を始めることが出来ます。

## Tips

### ビルドキャッシュをリセットする

どんな言語やフレームワークで開発していてもそうですが、ドキュメントのとおりにやっているはずなのにビルドに失敗したり、うまくアプリケーションが起動できなかったりすることがあります。

たいていの場合はどこかにタイポがあったりして「あぁ、ミスってた〜」となるのですが、本当にどうにも原因がわからないこともあります。

そういった場合にビルドなどのキャッシュをクリアすると何故かうまく動いてしまうこともあるので、このテンプレートではReact Nativeで開発しているときに生成されるキャッシュなどをすべて削除するスクリプトを用意しています。

次のコマンドを実行することで、ビルド時に利用されているキャッシュをすべて削除することが出来ます。なお、このコマンドを実行するとすべてのキャッシュが削除されるため、次回のアプリケーションビルドにかなり時間がかかるようになります。

> **Note**: コマンドを実行する前に、Metroサーバを停止してください。また、Android StudioやXcodeなども終了しおくことをおすすめします。

```
npm run reset-cache
```

## `expo-template-bare-typescript` からの変更点

- [x] Editorconfig, ESLint, Prettier を追加
- [x] TypeScript の設定ファイルを修正、`tsc`での型チェックを lint に追加
- [x] Android でデフォルトで要求するパーミッションの最小化
- [x] `App.tsx`を`src`ディレクトリ配下に移動
