import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {IconProps} from 'react-native-vector-icons/Icon';

type SpecificIconType = Omit<IconProps, 'name'>;

const CameraIcon = (props: SpecificIconType) => {
  return <FontAwesomeIcon name="camera" {...props} />;
};

export default CameraIcon;
