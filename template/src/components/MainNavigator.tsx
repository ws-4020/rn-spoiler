import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import HelloWorld from './pages/HelloWorld';

// テンプレートでは、スタックを利用しています。
// アプリでタブの利用する場合は、ここをcreateBottomTabNavigatorに変更してください。
const Main = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Main.Navigator initialRouteName={HelloWorld.name}>
      <Main.Screen name={HelloWorld.name} component={HelloWorld.component} options={HelloWorld.options} />
    </Main.Navigator>
  );
}
