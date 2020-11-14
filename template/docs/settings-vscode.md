# Visual Studio Codeでの開発

Visual Studio Code（以下、VSCode）でReact Nativeアプリケーションを開発するために有用なプラグインなどの紹介です。

## おすすめのプラグイン

TypeScriptサポートなどの最低限の開発環境はデフォルトで整っていますが、このプロジェクトの開発に有用なプラグインをいくつか紹介します。

### デバック

React Native アプリケーションのデバッグをするには、 [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) をインストールして以下の手順に従って設定してください。

- [microsoft/vscode-react-native: VSCode extension for React Native - supports debugging and editor integration](https://github.com/Microsoft/vscode-react-native#debugging-react-native-applications)

### Lintとフォーマッタ

このプロジェクトでは、LintツールとしてESLint、フォーマッタとしてEditorConfigとPrettierの設定をしています。
次にあげるESLintとPrettier, EditorConfigのプラグインをインストールして、React Nativeのプロジェクトを開くと、ESLintとPrettierのチェックが有効になります。
チェックに違反しているコードは黄色か赤の波線が表示されます。

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslin)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### テスト

テストはJestを利用しているので、以下のプラグインをインストールしておくと便利です。

- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

### その他

その他、React Nativeの開発に限らず有用なプラグインを紹介しておきます。好みのプラグインをインストールしてください。

- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## VSCodeのショートカット一覧

- [【Windows版】VS Code キーボードショートカット一覧 （オススメ付き） - Qiita](https://qiita.com/TakahiRoyte/items/cdab6fca64da386a690b)
- [【Mac版】 VisualStudioCode キーボードショートカット - Qiita](https://qiita.com/naru0504/items/99495c4482cd158ddca8)


