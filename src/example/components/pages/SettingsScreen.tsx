import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {normalize, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

import {GearIcon} from '../basics';

export default {
  name: 'Settings',
  component: Component,
  options: {
    tabBarIcon: () => <GearIcon size={normalize(24)} />,
  } as BottomTabNavigationOptions,
};

function Component() {
  return (
    <SafeAreaView>
      <Text>Settings Component</Text>
    </SafeAreaView>
  );
}
