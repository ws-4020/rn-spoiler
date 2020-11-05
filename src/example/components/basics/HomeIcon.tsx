import React from 'react';
import {Icon} from 'react-native-elements';

import {SpecificIconType} from './SpecificIconType';

// React Native Elementsを使用したアイコンのサンプル
const HomeIcon = ({color = '#9D8CB8', ...props}: SpecificIconType) => {
  return <Icon name="home" type="font-awesome" color={color} {...props} />;
};

export default HomeIcon;
