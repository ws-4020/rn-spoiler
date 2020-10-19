import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CameraIcon, HomeIcon, TrashIcon, GuruGuruIcon} from '../basics';

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
      <Text style={styles.text}>Home Component</Text>
      <Text style={styles.text}>
        Sample text 1 <CameraIcon size={textFontSize} />
      </Text>
      <Text style={styles.text}>
        <GuruGuruIcon size={textFontSize} /> Sample text 2 <TrashIcon size={textFontSize} />
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 16,
  },
});
