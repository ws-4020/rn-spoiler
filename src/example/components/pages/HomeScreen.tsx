import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {normalize} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CameraIcon, HomeIcon, TrashIcon} from '../basics';
import {Text} from '../parts';

export default {
  name: 'Home',
  component: Component,
  options: {
    tabBarIcon: () => <HomeIcon size={normalize(24)} />,
  } as BottomTabNavigationOptions,
};

const iconSize = normalize(16);

function Component() {
  return (
    <SafeAreaView>
      <Text>Home Component</Text>
      <Text>
        Sample text 1 <CameraIcon size={iconSize} />
      </Text>
      <Text>
        Sample text 2 <TrashIcon size={iconSize} />
      </Text>
    </SafeAreaView>
  );
}
