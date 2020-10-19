import React from 'react';
import {SvgProps} from 'react-native-svg';

import {GuruGuru} from '../../../generated/svg';

type Props = SvgProps & {size?: number};

const GuruGuruIcon = ({size = 24, ...props}: Props) => {
  return <GuruGuru title="GuruGuruIcon" color="#9D8CB8" width={size} height={size} viewBox="0 0 32 32" {...props} />;
};

export default GuruGuruIcon;
