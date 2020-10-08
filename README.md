# ws-4020 React Native template

[Expo](https://expo.io/) の [expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript) をベースにしたReact Nativeのテンプレートです。

## How to use

### 新規プロジェクトの作成

以下のコマンドを実行して、新規プロジェクトを作成できます。

```bash
expo init -t https://github.com/ws-4020/react-native-starter.git <YourAppName>
```

`<YourAppName>` に設定した名前でディレクトリが作成されて、Gitリポジトリとして初期化されます。Gitリポジトリにする必要がない場合は`.git`ディレクトリを削除してください。

### ストア配信の準備

ExpoのBare Workflowを利用することになるため、Expoのドキュメントを参照してストア配信の準備をしてください。Managed Workflowのドキュメントではありますが、このテンプレートを利用する場合でも参考になります。

* [Deploying to App Stores - Expo](https://docs.expo.io/distribution/app-stores/)
  * このテンプレートではBare Workflowを採用しているため、`app.json` の `ios`と`android` に関する設定は、`Info.plist`や`AndroidManifest.xml`などで設定する必要があります
  * Managed WorkflowとBare Workflowの違いについては [Workflows - Expo Documentation](https://docs.expo.io/introduction/managed-vs-bare/) を参照してください
