import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import {RouteParams} from './components/RouteParams';
import {DetailsHeader, DetailsScreen, HomeHeader, HomeScreen} from './components/pages';

const RootStack = createStackNavigator<RouteParams>();

export default function App() {
  return (
    <NavigationContainer>
      {/*https://reactnavigation.org/docs/stack-navigator/*/}
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} options={{headerTitle: HomeHeader}} initialParams={{now: new Date().toISOString()}} />
        <RootStack.Screen name="Details" component={DetailsScreen} options={{headerTitle: DetailsHeader}} initialParams={{name: 'In a Paddy'}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
