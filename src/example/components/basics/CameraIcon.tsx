import React from 'react';
import {Icon as RNEIcon, IconProps} from 'react-native-elements';

import {SpecificIconType} from '../Constants';

// React Native Elementsを使用したアイコンのサンプル
const Icon = ({color = '#9D8CB8', ...props}: SpecificIconType) => {
  return <RNEIcon name="camera" type="font-awesome" color={color} {...props} />;
};

export default Icon;
