import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import FormWizardNavigator from './pages/form/FormWizardNavigator';

const Main = createBottomTabNavigator();

export type AppRouteProps = {
  Home: undefined;
  Settings: undefined;
  Form: undefined;
};

function Dummy() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.reset({index: 0, routes: [{name: 'Example'}]});
  });
  return <View />;
}

export function MainNavigator() {
  return (
    <Main.Navigator initialRouteName={HomeScreen.name}>
      <Main.Screen name={HomeScreen.name} component={HomeScreen.component} options={HomeScreen.options} />
      <Main.Screen name={FormWizardNavigator.name} component={FormWizardNavigator.component} options={FormWizardNavigator.options} />
      <Main.Screen name={SettingsScreen.name} component={SettingsScreen.component} options={SettingsScreen.options} />
      <Main.Screen name="Dummy" component={Dummy} options={{tabBarLabel: 'Main', tabBarIcon: () => <Text>️⏏️</Text>}} />
    </Main.Navigator>
  );
}
