import React from 'react';
import {Icon as RNEIcon} from 'react-native-elements';

import {SpecificIconType} from './SpecificIconType';

// React Native Elementsを使用したアイコンのサンプル
const Icon = ({color = '#9D8CB8', ...props}: SpecificIconType) => {
  return <RNEIcon name="gear" type="font-awesome" color={color} {...props} />;
};

export default Icon;
