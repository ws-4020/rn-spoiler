import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {IconProps} from 'react-native-vector-icons/Icon';

type SpecificNameAndColorIconType = Omit<IconProps, 'name' | 'color'>;

const CameraIcon = ({size = 24, ...props}: SpecificNameAndColorIconType) => {
  return <FontAwesomeIcon name="camera" color="#9D8CB8" size={size} {...props} />;
};

export default CameraIcon;
