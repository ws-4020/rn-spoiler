---
title: Troubleshooting
---

## ビルドキャッシュをリセットする

どんな言語やフレームワークで開発していてもそうですが、ドキュメントのとおりにやっているはずなのにビルドに失敗したり、うまくアプリケーションが起動できなかったりすることがあります。

たいていの場合はどこかにタイポがあったりして「あぁ、ミスってた〜」となるのですが、本当にどうにも原因がわからないこともあります。

そういった場合にビルドなどのキャッシュをクリアすると何故かうまく動いてしまうこともあるので、このテンプレートでは React Native で開発しているときに生成されるキャッシュなどをすべて削除するスクリプトを用意しています。

次のコマンドを実行することで、ビルド時に利用されているキャッシュをすべて削除することが出来ます。なお、このコマンドを実行するとすべてのキャッシュが削除されるため、次回のアプリケーションビルドにかなり時間がかかるようになります。

> **Note**: コマンドを実行する前に、Metro サーバを停止してください。また、Android Studio や Xcode なども終了しおくことをおすすめします。

```
npm run reset-cache
```

## Android アプリのビルドで OutOfMemoryError

Android アプリのビルドで OutOfMemoryError が発生したときは、Gradleが立ち上げるJVMのヒープサイズを増やして対応してください。

`android/gradle.properties` の `org.gradle.jvmargsorg.gradle.jvmargs` で設定する `Xmx` や `XX:MaxPermSize` の値を増やすことで解決できるはずです。


## 【未解決】 createReleaseExpoManifest でエラーが発生してしまう

Android アプリのビルドの際に、 `:app:createReleaseExpoManifest` で次のようなエラーが発生することがあります。

```
> Task :app:createReleaseExpoManifest FAILED
internal/modules/cjs/loader.js:968
  throw err;
  ^

Error: Cannot find module '/scripts/createManifest.js'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:965:15)
    at Function.Module._load (internal/modules/cjs/loader.js:841:27)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```

以下のようなIssueが挙げられているのですが、2020-10-16時点ではまだ解決方法は回答されていません。
* https://github.com/expo/expo/issues/8547
* https://github.com/expo/expo-cli/issues/2232
