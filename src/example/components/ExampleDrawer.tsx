import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import {MainNavigator} from '../../components/MainNavigator';
import {MainNavigator as ExampleMainNavigator} from './MainNavigator';

const ExampleDrawer = createDrawerNavigator();

export function ExampleNavigator() {
  return (
    <ExampleDrawer.Navigator initialRouteName="MainNavigator">
      <ExampleDrawer.Screen name="HelloWorld" component={MainNavigator} />
      <ExampleDrawer.Screen name="Example" component={ExampleMainNavigator} options={{swipeEnabled: false}} />
    </ExampleDrawer.Navigator>
  );
}
