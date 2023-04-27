# ライブラリへのパッチ

## React Native Elementsの型エラーに対処するパッチ

↓の変更で、TV関連の型が変更されました。
https://github.com/DefinitelyTyped/DefinitelyTyped/commit/73459e5084f7406d577a5b03ac2bf8cdd2c30f45

React Native 0.66ではTextInputの`autoCompleteType`が`autoComplete`に変更になりました。
https://github.com/facebook/react-native/commit/27fec9569e08a04e0dbdbd5de063a599ad0416fa

React18から、React.Componentに定義されていたchildrenが削除されました。
https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210

React Native Elementsの3系ではこれらの変更に追従できていなかったため、以下の修正をしたパッチを当てています。
* `Icon`のPropsから`tvParallaxProperties`を削除
* `ListItem`のPropsから`tvParallaxProperties`、`hasTVPreferredFocus`を削除
* `ListItem.XXX`のPropsから`tvParallaxProperties`を削除
* `Input`のPropsの`autoCompleteType`を`autoComplete`に変更
* `ThemeProvider`のPropsに`children`を追加

## Expo Config Pluginsで、iOS用に追加したファイルのIDを取得できない問題に対処するパッチ

`IOSConfig.XcodeUtils.addResourceFileToGroup`でファイルを追加した際に、追加したファイルのIDが取得できません。
そのため、追加したファイルのIDを参照するような設定ができない事象が発生しました。

そこで、`IOSConfig.XcodeUtils.addResourceFileToGroup`にファイルのIDを指定できるパッチを当てています。

### `@expo/config-plugins`を`devDependencies`に追加

ライブラリによっては`@expo/config-plugins`を`dependencies`に設定しています。
これらのライブラリが設定している`@expo/config-plugins`のバージョンが同じとは限りません。

複数のバージョンが混在している場合、`deduped`が発生し`node_modules`配下は以下のようになります。

```console
node_modules/
├── @expo
│   ├── cli
│   │   ├── node_modules
│   │   │   ├── @expo
│   │   │   │   ├── config-plugins(6.0.1)
│   ├── config-plugins(5.0.4)
├── @react-native-firebase
│   ├── app

※ 必要な箇所以外は省略しています。
※ `@expo/config-plugins`を`dependencies`に設定しているライブラリとして、`@react-native-firebase/app`を例に挙げています。
※ 括弧内に記載しているバージョンは例です。
```

このパッチは、`@expo/cli`が使用する`@expo/config-plugins`に適用しますが、`deduped`が発生するかどうかによってパッチを適用するべきパスが変わってしまいます。

そのため、`@expo/cli`が使用する`@expo/config-plugins`と同じバージョンを`devDependencies`に追加して、`node_modules`配下の構成を以下のようにします。

```console
node_modules/
├── @expo
│   ├── cli
│   ├── config-plugins(6.0.1)
├── @react-native-firebase
│   ├── app
│   │   ├── node_modules
│   │   │   │   ├── config-plugins(5.0.4)

※ 必要な箇所以外は省略しています。
※ `@expo/config-plugins`を`dependencies`に設定しているライブラリとして、`@react-native-firebase/app`を例に挙げています。
※ 括弧内に記載しているバージョンは例です。
```

この対応により、パッチを適用するパスは常に`node_modules/@expo/config-plugins`になります。

## Expo Config Pluginsで、デフォルトpluginを無効化できるようにするパッチ

`expo prebuild`時にデフォルトpluginに含まれる`withScheme`pluginによってカスタムスキーマが追加されてしまいます。
追加されたカスタムスキーマの記述を削除するためのpluginを新規作成するより、該当pluginを無効化したほうがシンプルなためExpo Config Pluginsにパッチを当てて機能拡張しました。

※ 現在は `withPlugins` に渡されている plugin のみが対象です(`withRunOnce`, `withStaticPlugin` は対象外)。

`app.config.js`の`disabledPlugins`にpluginの`name`を追加すれば除外できます。

## [react-native] FlatListでデータが0件の場合に`scrollToEnd`を呼び出すとエラーが発生する問題に対処するパッチ

FlatListでデータが0件の場合に`scrollToEnd`を呼び出すと以下のエラーが発生します。

> ERROR  Invariant Violation: Tried to get frame for out of range index -1, js engine: hermes

この問題に対するissueとPull Requestは以下になります。
* https://github.com/facebook/react-native/issues/36066
* https://github.com/facebook/react-native/pull/36067

Pull Requestは既にクローズされ`main`ブランチにはマージされていますが、このアプリで使用している`react-native`のバージョンにはまだ入っていないため、パッチを当てています。
