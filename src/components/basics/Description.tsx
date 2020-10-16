import * as React from 'react';
import {PropsWithChildren} from 'react';
import {Text, TextProps, View} from 'react-native';

export const Description = (props: PropsWithChildren<TextProps>) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};
