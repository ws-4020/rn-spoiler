# RN Spoiler

[Expo](https://expo.io/) の [expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript) をベースにしたReact Nativeのテンプレートです。

## 前提条件

* [React Nativeの開発環境が構築](https://reactnative.dev/docs/environment-setup)されていること
  * **必ず「React Native CLI Quickstart」というタブをクリック**して、手順を実施してください。
  * 「Development OS」は、開発に利用しているOSを選択してください。
  * （macOSのみ）「Target OS」は、「iOS」「Android」の両方の手順を実施してください。

## 使い方

### 新規プロジェクトの作成

次のコマンドを実行して、新規プロジェクトを作成できます。

```bash
expo init -t https://github.com/ws-4020/react-native-starter.git <YourAppName>
```

`<YourAppName>` に設定した名前でディレクトリが作成されて、Gitリポジトリとして初期化されます。Gitリポジトリにする必要がない場合は`.git`ディレクトリを削除してください。
また、テンプレートプロジェクト自体のために`.github`ディレクトリを用意していますが、プロジェクトで不要であれば削除してください。

正しく生成できていることを確認するために、次のコマンドを実行してアプリが正しく起動することを確認してください。

```
npm run ios // iPhoneのシミュレータが起動します
npm run android // Androidエミュレータが起動します
```

### アプリの配信準備

アプリの配信までにしなくてはいけない作業がいくつかあるので、Expoのドキュメントを参照してアプリの配信準備をしてください。
Managed Workflowのドキュメントではありますが、Bare Workflowを採用しているこのテンプレートを利用する場合でも参考になります。

* [Deploying to App Stores - Expo](https://docs.expo.io/distribution/app-stores/)
  * このテンプレートではBare Workflowを採用しているため、`app.json`の`ios`と`android`に関する設定は、`Info.plist`や`AndroidManifest.xml`などで設定する必要があります
  * Managed WorkflowとBare Workflowの違いについては [Workflows - Expo Documentation](https://docs.expo.io/introduction/managed-vs-bare/) を参照してください

### ソースコードのスタイルなどをチェックする

詳細に定義されたコーディング規約を意識しながらコードを書くのではなく、自動的にコードのスタイルなどをチェックしてくれるツールを活用してください。
このテンプレートでは、そういった支援をしてくれるツールを導入しています。必要に応じて、各設定ファイルを編集して好みの設定に調整してください。

次のコマンドを実行すると、すべてのツールでのチェックが実行されます。

```bash
npm run -s lint
```

ツールに定型的な修正を実行させるには、次のコマンドを実行してください。なお、自動修正が適用できない違反は通常通り報告されます。

```bash
npm run -s fix
```

#### ESLint

* [ESLint](https://eslint.org/)
  * 標準的な規約として、[eslint-config-universe](https://github.com/expo/expo/tree/master/packages/eslint-config-universe)を設定してあります。
  * TypeScriptの型に関する規約([@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules))も設定してあります。
    * TypeScriptに慣れていないと、この規約が厳しく感じるかもしれません。実際にコードを書いてみて、対応するのが難しい指摘や効果の薄い指摘は個別にルールを無効化してみてください。
  * 設定を変更したい場合は、ESLintやeslint-config-universeのドキュメントを確認して、`.eslintrc.js`を変更してください。
* [EditorConfig](https://editorconfig.org/)
  * 一般的と考えている設定をしています。内容については`.eslintconfig`内のコメントを確認してください。
* [Prettier](https://prettier.io/)
  * `npx react-native init`で生成されるものと同じ設定をしています。内容については`.prettierrc.js`内のコメントを確認してください。
  * EditorConfigの設定も読み込むので、重複する内容を設定する必要はありません。[読み込まれるEditorConfigの設定値](https://prettier.io/docs/en/api.html#prettierresolveconfigfilepath--options)は次のものです。
    * `end_of_line`
    * `indent_style`
    * `indent_size`, `tab_width`
    * `max_line_length`

ESLintでのチェックを実行するには、次のコマンドを実行してください。

```bash
npm run -s lint:es
```

定型的な修正はツールが自動的に変更を加えてくれます。自動的に修正したい場合は、次のコマンドを実行してください。すべての違反を修正してくれるわけではありませんが、非常に便利なのでぜひ活用してください。

```bash
npm run -s fix:es
```

#### TypeScript

[TypeScript](https://www.typescriptlang.org/)のコンパイラには、コーディング規約をチェックする機能があります。たとえば、型情報が適切に設定されているかどうかや、import/exportの構文が規約どおりになっているかなどをチェックすることができます。

テンプレートでは、React Native (Expo) での標準的な内容を設定してあります。設定値の詳細については、`tsconfig.json`と[TSConfig Reference](https://www.typescriptlang.org/tsconfig)を参照してください。

TypeScriptコンパイラでの規約チェックを実行するには、次のコマンドを実行してください。

```bash
npm run -s lint:tsc
```

## `expo-template-bare-typescript` からの変更点

* [x] Editorconfig, ESLint, Prettierを追加
* [x] TypeScriptの設定ファイルを修正、`tsc`での型チェックをlintに追加
