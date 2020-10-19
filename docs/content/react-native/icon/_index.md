---
title: Icon
weight: 200
---

## アプリで使用しているライブラリ

Expoには[@expo/vector-icons](https://docs.expo.io/guides/icons/)がデフォルトで入っていますが、
アプリでは、React Native Elementsのテーマに合わせてアイコンを表示してくれる[React Native ElementsのIcon](https://reactnativeelements.com/docs/icon/)（（[使用可能アイコン一覧](https://oblador.github.io/react-native-vector-icons/)））を使用します。

## カスタムアイコンの作りかた

React Native ElementsのIconでは多数のアイコンを使用できますが、独自のアイコンを使いたい場合は、[こちらを](https://github.com/oblador/react-native-vector-icons#custom-fonts)参考にしてください。

## SVGの取り扱いの難しさ

カスタムアイコンの手段としてSVGが考えられますが、React NativeでSVGを取り扱うのは以下の理由から、あまりお勧めしません。
- 画像のソースとしてSVGをサポートしていない（React NativeのImageタグのsource属性ではSVGをサポートしていません）
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)でもSVGのファイル読み込みをサポートしていない
- SVGのファイル読み込みをサポートするライブラリ[react-native-svg-uri](https://github.com/vault-development/react-native-svg-uri)はメンテナンスされておらず、AndroidでRelease buildができないなどのバグがある

もしSVGファイルを使いたい場合は、[SVGR](https://github.com/gregberge/svgr)というツールでSVGをReactのコンポーネントに変換して、それを使う方法があります。
- 参考: Stack Overflow - [How to show SVG file on React Native?](https://stackoverflow.com/questions/38830568/how-to-show-svg-file-on-react-native)



