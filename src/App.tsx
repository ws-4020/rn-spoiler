import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CameraIcon} from './framework/components/basics';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CameraIcon size={30} color="#9D8CB8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
