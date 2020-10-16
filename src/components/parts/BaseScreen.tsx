import * as React from 'react';
import {PropsWithChildren} from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';

type BaseScreenProps = ViewProps;

export const BaseScreen = (props: PropsWithChildren<BaseScreenProps>) => {
  return (
    <View style={{flex: 1}}>
      <View style={StyleSheet.flatten([style.screen, props.style])}>{props.children}</View>
    </View>
  );
};

export const style = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'},
});
