# アプリの配信準備

アプリの配信までにしなくてはいけない作業がいくつかあるので、Expo のドキュメントを参照してアプリの配信準備をしてください。
Managed Workflow のドキュメントではありますが、Bare Workflow を採用しているこのテンプレートを利用する場合でも参考になります。

- [Deploying to App Stores - Expo](https://docs.expo.io/distribution/app-stores/)
  - このテンプレートでは Bare Workflow を採用しているため、`app.json`の`ios`と`android`に関する設定は、`Info.plist`や`AndroidManifest.xml`などで設定する必要があります
  - Managed Workflow と Bare Workflow の違いについては [Workflows - Expo Documentation](https://docs.expo.io/introduction/managed-vs-bare/) を参照してください
