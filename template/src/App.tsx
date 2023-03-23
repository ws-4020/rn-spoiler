import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {RootStackNav} from 'navigation';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const App = () => {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootStackNav />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
