import * as React from 'react';
import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';

function SvgKiraKira(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 8.467 8.467" {...props}>
      <G fill="none" stroke="#000">
        <Circle
          cx={3.95}
          cy={2.918}
          r={1.355}
          strokeWidth={0.181}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.67 6.508l.521-.432-.06-.675.572.363.623-.266-.168.656.445.51-.676.043-.347.582-.25-.63zM4.477 7.619l-.778-.141-.557.56-.107-.783L2.33 6.9l.713-.343.12-.782.547.571.78-.126-.374.696z"
          strokeWidth={0.212}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.956 4.428L3.944 5.53M3.975.3L3.963 1.4M6.563 3.006l-1.102-.012M2.436 2.982l-1.102-.011M5.001 4.026l.828.728M2.075 1.067l.787.771M5.87 1.136l-.827.728M2.823 3.936l-.827.727"
          strokeWidth={0.239}
        />
      </G>
    </Svg>
  );
}

const MemoSvgKiraKira = React.memo(SvgKiraKira);
export default MemoSvgKiraKira;
