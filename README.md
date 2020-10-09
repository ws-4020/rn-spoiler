# ws-4020 React Native template

[Expo](https://expo.io/) の [expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript) をベースにしたReact Nativeのテンプレートです。

## 前提条件

* [React Nativeの開発環境が構築](https://reactnative.dev/docs/environment-setup)されていること
  * **必ず「React Native CLI Quickstart」というタブをクリック**して、手順を確認してください。
  * 「Development OS」は、使っているOSを選択してください。
  * （macOSのみ）「Target OS」は、「iOS」「Android」の両方の手順を実施してください。

## 使い方

### 新規プロジェクトの作成

以下のコマンドを実行して、新規プロジェクトを作成できます。

```bash
expo init -t https://github.com/ws-4020/react-native-starter.git <YourAppName>
```

`<YourAppName>` に設定した名前でディレクトリが作成されて、Gitリポジトリとして初期化されます。Gitリポジトリにする必要がない場合は`.git`ディレクトリを削除してください。

正しく生成できていることを確認するために、次のコマンドを実行してアプリが正しく起動することを確認してください。

```
npm run ios // iPhoneのシミュレータが起動します
npm run android // Androidエミュレータが起動します
```

### アプリの配信準備

アプリの配信までにしなくてはいけない作業がいくつかあるので、Expoのドキュメントを参照してアプリの配信準備をしてください。
Managed Workflowのドキュメントではありますが、Bare Workflowを採用しているこのテンプレートを利用する場合でも参考になります。

* [Deploying to App Stores - Expo](https://docs.expo.io/distribution/app-stores/)
  * このテンプレートではBare Workflowを採用しているため、`app.json` の `ios`と`android` に関する設定は、`Info.plist`や`AndroidManifest.xml`などで設定する必要があります
  * Managed WorkflowとBare Workflowの違いについては [Workflows - Expo Documentation](https://docs.expo.io/introduction/managed-vs-bare/) を参照してください

### ソースコードのスタイルなどをチェックする

詳細に定義されたコーディング規約を意識しながらコードを書くのではなく、自動的にコードのスタイルなどをチェックしてくれるツールを活用してください。
このテンプレートでは、そういった支援をしてくれる、以下のツールを導入しています。

* [ESLint](https://eslint.org/)
  * 標準的な規約として、[eslint-config-universe](https://github.com/expo/expo/tree/master/packages/eslint-config-universe)を設定してあります。
  * TypeScriptの型に関する規約([@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules))も設定してあります。
    * TypeScriptに慣れていないと、この規約が厳しく感じるかもしれません。実際にコードを書いてみて、対応するのが難しい指摘や効果の薄い指摘は個別にルールを無効化してみてください。
  * 設定を変更したい場合は、ESLintやeslint-config-universeのドキュメントを確認して、`.eslintrc.js`を変更してください。
* [Prettier](https://prettier.io/)
  * `.prettierrc.js`に設定を記載しています。内容についてはコメントを確認してください。
  * 好みの部分が大きいと思うので、
* [EditorConfig](https://editorconfig.org/)
  * `.eslintconfig`に設定を記載しています。

規約違反のコードがないかをチェックするには、次のコマンドを実行してください。

```
npm run -s lint
```

定型的な修正はツールが自動的に変更を加えてくれます。自動的に修正したい場合は、次のコマンドを実行してください。すべての違反を修正してくれるわけではありませんが、非常に便利なのでぜひ活用してください。

```
npm run -s lint:fix
```

## `expo-template-bare-typescript` からの変更点

* [ ] Editorconfig, ESLint, Prettierを追加
