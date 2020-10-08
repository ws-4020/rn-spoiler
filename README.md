# ws-4020 React Native template

[Expo](https://expo.io/) の [expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript) をベースにしたReact Nativeのテンプレートです。

## How to use

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

### ストア配信の準備

ExpoのBare Workflowを利用することになるため、Expoのドキュメントを参照してストア配信の準備をしてください。Managed Workflowのドキュメントではありますが、このテンプレートを利用する場合でも参考になります。

* [Deploying to App Stores - Expo](https://docs.expo.io/distribution/app-stores/)
  * このテンプレートではBare Workflowを採用しているため、`app.json` の `ios`と`android` に関する設定は、`Info.plist`や`AndroidManifest.xml`などで設定する必要があります
  * Managed WorkflowとBare Workflowの違いについては [Workflows - Expo Documentation](https://docs.expo.io/introduction/managed-vs-bare/) を参照してください

### ソースコードのスタイルなどをチェックする

詳細に定義されたコーディング規約を意識しながらソースコードを書くのではなく、自動的にソースコードのスタイルなどをチェックしてくれるツールを活用してください。
このテンプレートでは、そういった支援をしてくれる、以下のツールを導入しています。

* [ESLint](https://eslint.org/)
  * 標準的な規約として、[eslint-config-universe](https://github.com/expo/expo/tree/master/packages/eslint-config-universe)を設定してあります。
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
