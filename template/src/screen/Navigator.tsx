import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {Home} from './home';

const screens = [Home];

// テンプレートでは、スタックを利用しています。
// アプリでタブの利用する場合は、ここをcreateBottomTabNavigatorに変更してください。
const Main = createNativeStackNavigator();
export const Navigator = () => {
  return (
    <Main.Navigator initialRouteName={Home.name}>
      {screens.map((screen) => (
        <Main.Screen key={screen.name} {...screen} />
      ))}
    </Main.Navigator>
  );
};
