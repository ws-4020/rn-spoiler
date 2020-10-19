import React from 'react';
import {SvgProps} from 'react-native-svg';

import {GuruGuru} from '../../../generated/svg';

type Props = SvgProps & {size?: number};

// SVGRを使用したカスタムアイコンのサンプル
const GuruGuruIcon = ({size = 26, color='#9D8CB8', ...props}: Props) => {
  return <GuruGuru title="GuruGuruIcon" color={color} width={size} height={size} viewBox="0 0 32 32" {...props} />;
};

export default GuruGuruIcon;
