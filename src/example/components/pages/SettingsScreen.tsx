import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

export default {
  name: 'Settings',
  component: Component,
  options: {
    tabBarIcon: () => <Text>⚙️</Text>,
  } as BottomTabNavigationOptions,
};

function Component() {
  return (
    <SafeAreaView>
      <Text>Settings Component</Text>
    </SafeAreaView>
  );
}
