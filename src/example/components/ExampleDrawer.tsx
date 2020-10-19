import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import {MainNavigator} from '../../components/MainNavigator';
import {MainNavigator as ExampleMainNavigator} from './MainNavigator';

const ExampleDrawer = createDrawerNavigator();

export function ExampleNavigator() {
  return (
    <ExampleDrawer.Navigator initialRouteName="MainInDrawer">
      <ExampleDrawer.Screen name="MainInDrawer" component={MainNavigator} options={{drawerLabel: 'Main'}} />
      <ExampleDrawer.Screen name="ExampleInDrawer" component={ExampleMainNavigator} options={{drawerLabel: 'Example', swipeEnabled: false}} />
    </ExampleDrawer.Navigator>
  );
}
