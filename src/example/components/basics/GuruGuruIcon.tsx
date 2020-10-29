import React from 'react';
import {SvgProps} from 'react-native-svg';

import {GuruGuru} from '../../../generated/svg';

type Props = SvgProps & {size?: number};
const defaultSizeOfReactNativeElementsIcon = 26;

// SVGを使用したカスタムアイコンのサンプル
const Icon = ({size = defaultSizeOfReactNativeElementsIcon, color = '#9D8CB8', ...props}: Props) => {
  return <GuruGuru title="GuruGuruIcon" color={color} width={size} height={size} viewBox="0 0 32 32" {...props} />;
};

export default Icon;
