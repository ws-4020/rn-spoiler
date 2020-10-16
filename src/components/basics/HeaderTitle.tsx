import * as React from 'react';
import {PropsWithChildren} from 'react';
import {View} from 'react-native';

export const HeaderTitle = (props: PropsWithChildren<object>) => {
  return <View>{props.children}</View>;
};
