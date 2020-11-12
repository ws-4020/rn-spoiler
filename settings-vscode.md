# Visual Studio Codeでの環境構築

React Nativeの開発に使うIDEはVisual Studio Code(以降VSCode)がおすすめです。
以下に、最低限VSCodeで開発するための環境構築手順を示します。

## VSCodeのインストール

- [公式サイト](https://code.visualstudio.com/)からVSCodeをダウンロードしてインストールしてインストール

## 各種プラグインをダウンロード

プラグインは以下をインストールしてください。以下Visual Studio Marketplaceへのリンクです。

- デバッグ用 
  - [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- エディター系
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslin)
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- 構成管理
  - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- テスト
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- 入力補助系
  - [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
  - [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)
  - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
  - [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
  - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
  - [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
- ドキュメント系
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## Lint(PrettierとELLint)の活用方法

PrettierとESLintのプラグインをインストールして、React NativeのプロジェクトをVSCodeで開くと、ESLintとPretiierのチェックが有効になります。
チェックに違反しているコードは黄色か赤の波線が表示されます。

違反は`npm run fix`コマンドで自動修正できます。
ただ自動修正できない違反は、コマンド実行後にエラーとして出力されるので、手動で修正してください。

## デバック方法

React Native Toolsのプラグインをインストールして以下の手順に従ってVSCodeで設定してください。

- [microsoft/vscode-react-native: VSCode extension for React Native - supports debugging and editor integration](https://github.com/Microsoft/vscode-react-native#debugging-react-native-applications)


## VSCodeのショートカット一覧
- [【Windows版】VS Code キーボードショートカット一覧 （オススメ付き） - Qiita](https://qiita.com/TakahiRoyte/items/cdab6fca64da386a690b)
- [【Mac版】 VisualStudioCode キーボードショートカット - Qiita](https://qiita.com/naru0504/items/99495c4482cd158ddca8)


