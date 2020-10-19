import React from 'react';
import {Icon, IconProps} from 'react-native-elements';

type SpecificIconType = Omit<IconProps, 'name' | 'type'>;

// React Native Elementsを使用したサンプル
const TrashIcon = ({size = 26, color='#9D8CB8', ...props}: SpecificIconType) => {
  return <Icon name='trash' type='font-awesome' color={color} size={size} {...props} />;
};

export default TrashIcon;
