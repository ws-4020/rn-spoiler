import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CameraIcon, GuruGuruIcon, TrashIcon} from '../basics';

export default {
  name: 'Home',
  component: Component,
  options: {
    tabBarIcon: () => <Text>🏠</Text>,
  } as BottomTabNavigationOptions,
};

const textFontSize = 16

function Component() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Home Component</Text>
      <Text style={styles.text}>Sample text 1 <CameraIcon size={textFontSize} /></Text>
      <Text style={styles.text}><GuruGuruIcon size={textFontSize} /> Sample text 2 <TrashIcon size={textFontSize} /></Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  text: {
    marginBottom: 16,
  }
});
