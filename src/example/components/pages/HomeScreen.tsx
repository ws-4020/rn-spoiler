import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CameraIcon, HomeIcon, TrashIcon, GuruGuruIcon} from '../basics';
import {Text} from '../parts';

export default {
  name: 'Home',
  component: Component,
  options: {
    tabBarIcon: () => <HomeIcon size={24} />,
  } as BottomTabNavigationOptions,
};

const textFontSize = 16;

function Component() {
  return (
    <SafeAreaView>
      <Text>Home Component</Text>
      <Text>
        Sample text 1 <CameraIcon size={textFontSize} />
      </Text>
      <Text>
        <GuruGuruIcon size={textFontSize} /> Sample text 2 <TrashIcon size={textFontSize} />
      </Text>
    </SafeAreaView>
  );
}
