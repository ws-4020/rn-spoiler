import {NavigationContainer} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import React from 'react';
// StackNavigatorには、ネイティブUIでスクリーンを表示するNativeStackNavigatorを利用します。
// ただし、あまりカスタマイズ出来ないようなので、もし細かいカスタマイズが必要になった場合はドキュメントに記載してる通りデフォルトのStackNavigatorを利用するように変更してください。
// https://reactnavigation.org/docs/react-native-screens/
// https://reactnavigation.org/docs/native-stack-navigator/
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {MainNavigator} from './components/MainNavigator';
import {ExampleNavigator} from './example/components/ExampleDrawer';

// モーダル画面などを表示するために、アプリが主として利用するTabNavigatorの前にStackNavigatorを用意しておきます。
// https://reactnavigation.org/docs/modal/
const RootStack = createNativeStackNavigator();

export default function App() {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }
  return (
    <NavigationContainer>
      {/* テンプレートに含まれるサンプルをアプリ内で表示できるように、DrawerNavigatorを用意しています。*/}
      {/* 必要なくなったらScreenを削除し、initialRouteNameをExampleからMainに変更してください。 */}
      <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Example">
        <RootStack.Screen name="Main" component={MainNavigator} />
        <RootStack.Screen name="Example" component={ExampleNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
