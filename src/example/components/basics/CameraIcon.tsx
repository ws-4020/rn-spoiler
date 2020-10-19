import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {IconProps} from 'react-native-vector-icons/Icon';

type SpecificIconType = Omit<IconProps, 'name'>;

// react-native-vector-iconsを使用したサンプル
const CameraIcon = ({size = 26, color='#9D8CB8',  ...props}: SpecificIconType) => {
  return <FontAwesomeIcon name="camera" size={size} color={color} {...props} />;
};

export default CameraIcon;
