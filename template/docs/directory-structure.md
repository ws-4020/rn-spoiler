# ディレクトリ構成

## ディレクトリ構成の方針

機能ごとにグループ化し、その下でファイルタイプごとにグループ化します。機能をまたがって共通的に利用する部品（Fetch API のラッパーやバリデーション、ロギングなど）は`framework`に格納します。

ファイルタイプごとのディレクトリには次の 6 つがあります。

- `backend` ... REST API や WebSocket など、バックエンドと通信する処理を格納します。
- `components` ... React のコンポーネントを格納します。このディレクトリの下は [コンポーネントの分類](#コンポーネントの分類) にしたがってさらに細分化されます。
- `context` ... コンテクスト（コンポーネントをまたいで使用する値）を格納します。React のコンテクストがどのようなものかについては [コンテクスト - React](https://ja.reactjs.org/docs/context.html) を参照してください。
- `hooks` ... フックを格納を格納します。React のフックがどのようなものかについては [フックの導入 - React](https://ja.reactjs.org/docs/hooks-intro.html) を参照してください。

> Note: `App.tsx`以外の、JSX を含むファイル（拡張子が`.jsx`または`.tsx`のファイル）はすべて`components`配下に格納されることに注意してください。

```
src
  ├─ func1
  │   ├ backend
  │   │   ├ XxxApi.ts
  │   │   └ ...
  │   ├ components
  │   │   ├ WithXxxContext.tsx
  │   │   ├ basics
  │   │   │   ├ XxxButton.tsx
  │   │   │   └ ...
  │   │   └ ...
  │   ├ context
  │   │   ├ XxxContext.ts
  │   │   └ ...
  │   └ hooks
  │       ├ XxxHook.ts
  │       └ ...
  ├─ func2
  │   ├ backend
  │   ├ components
  │   ├ context
  │   └ hooks
  ├─ framework
  │   ├ context
  │   ├ components
  │   ├ logging
  │   ├ validation
  │   └ ...
  └─ App.tsx
```

ディレクトリ構成に悩んだときは [ファイル構成 - React](https://ja.reactjs.org/docs/faq-structure.html) も参考にしてください。

## コンポーネントの分類

React (React Native)ではコンポーネントとは、React を利用して作られる画面全体あるいは画面を構成する部品のことを指します。

このプロジェクトではコンポーネントは`components`ディレクトリに格納しますが、さらに部品の大きさに応じて分けて格納します。

| 分類     | 概要                                                                                                                                               | 例                         |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `basics` | これ以上は分割できない最小のコンポーネントです。`basics`を組み合わせたものは、`basics`には入れてはいけません。                                     | ボタン、テキスト入力       |
| `parts`  | ある程度まとまった機能を持ったコンポーネントで、（主に）`basics`を組み合わせたものです。`parts`を組み合わせたものも`parts`に入れることができます。 | メッセージ入力フォーム     |
| `pages`  | 1 つの画面を表すコンポーネントで、`basics`や`parts`を組み合わせたものです。他の`pages`を組み合わせてはいけません。                                 | ログイン画面、チャット画面 |

なお、コンテキストを提供するためのコンポーネントのように画面(UI)の構築に直接関わらないものは`basics`、`parts`、`pages`のいずれにも該当しないと捉え、`components`ディレクトリ直下に格納します。
