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
