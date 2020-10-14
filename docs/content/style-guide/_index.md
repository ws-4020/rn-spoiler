---
title: スタイルガイド
---

TypeScript と React (React Native) のソースコードのスタイルガイドです。

詳細に定義されたコーディング規約を意識しながらコードを書くのではなく、自動的にコードのスタイルなどをチェックしてくれるツールを活用してください。
このプロジェクトでは、そういった支援をしてくれるツールを導入しています。

## ツールでチェックされない

変数名やファイル名の命名規約などはツールでチェックすることが出来ません。そのような規約については次のスタイルガイドに従うことにします。

> TODO: いい感じにマージしたい

- [スタイルガイド（コーディング規約） - TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/styleguide)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## ツールでソースコードのスタイルなどをチェックする

次のコマンドを実行すると、すべてのツールでのチェックが実行されます。

```bash
npm run -s lint
```

ツールに定型的な修正を実行させるには、次のコマンドを実行してください。なお、自動修正が適用できない違反は通常通り報告されます。

```bash
npm run -s fix
```

### ESLint

- [ESLint](https://eslint.org/)
  - 標準的な規約として、[eslint-config-universe](https://github.com/expo/expo/tree/master/packages/eslint-config-universe)を設定してあります。
  - TypeScript の型に関する規約([@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules))も設定してあります。
    - TypeScript に慣れていないと、この規約が厳しく感じるかもしれません。実際にコードを書いてみて、対応するのが難しい指摘や効果の薄い指摘は個別にルールを無効化してみてください。
  - 設定を変更したい場合は、ESLint や eslint-config-universe のドキュメントを確認して、`.eslintrc.js`を変更してください。
- [EditorConfig](https://editorconfig.org/)
  - 一般的と考えている設定をしています。内容については`.eslintconfig`内のコメントを確認してください。
- [Prettier](https://prettier.io/)
  - `npx react-native init`で生成されるものと同じ設定をしています。内容については`.prettierrc.js`内のコメントを確認してください。
  - EditorConfig の設定も読み込むので、重複する内容を設定する必要はありません。[読み込まれる EditorConfig の設定値](https://prettier.io/docs/en/api.html#prettierresolveconfigfilepath--options)は次のものです。
    - `end_of_line`
    - `indent_style`
    - `indent_size`, `tab_width`
    - `max_line_length`

ESLint でのチェックを実行するには、次のコマンドを実行してください。

```bash
npm run -s lint:es
```

定型的な修正はツールが自動的に変更を加えてくれます。自動的に修正したい場合は、次のコマンドを実行してください。すべての違反を修正してくれるわけではありませんが、非常に便利なのでぜひ活用してください。

```bash
npm run -s fix:es
```

### TypeScript コンパイラ

[TypeScript](https://www.typescriptlang.org/)のコンパイラには、コーディング規約をチェックする機能があります。たとえば、型情報が適切に設定されているかどうかや、import/export の構文が規約どおりになっているかなどをチェックすることができます。

テンプレートでは、React Native (Expo) での標準的な内容を設定してあります。設定値の詳細については、`tsconfig.json`と[TSConfig Reference](https://www.typescriptlang.org/tsconfig)を参照してください。

TypeScript コンパイラでの規約チェックを実行するには、次のコマンドを実行してください。

```bash
npm run -s lint:tsc
```

### IDE と連携する

Visual Studio Code など大体の IDE には、エディタ上に ESLint の実行結果を表示するプラグインがあるので、是非活用してください。インストール方法などは、プラグインのページを参照してください。

- Visual Studio Code: [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- IntelliJ IDEA, AppCode: [ESLint - 公式ヘルプ | IntelliJ IDEA](https://pleiades.io/help/idea/eslint.html) （デフォルトで利用可能）
