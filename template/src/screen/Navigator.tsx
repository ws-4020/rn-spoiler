import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Home} from 'screen/home';

const nav = createNativeStackNavigator();
export const Navigator = () => {
  return (
    <nav.Navigator initialRouteName={Home.name}>
      <nav.Screen name={Home.name} component={Home.component} options={Home.options} />
    </nav.Navigator>
  );
};
