import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import {CameraIcon, GuruGuruIcon} from './example/components/basics';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!!<CameraIcon /> <GuruGuruIcon /></Text>
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
