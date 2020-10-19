import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgGuruGuru(props: SvgProps) {
  return (
    <Svg width={32} height={32} {...props}>
      <Path
        d="M3.838 4.452c-.043.235-.338.059-.39-.07-.144-.35.211-.669.531-.71.573-.074 1.014.457 1.03.993.023.786-.705 1.365-1.455 1.349-.999-.022-1.72-.953-1.668-1.916.064-1.212 1.201-2.075 2.377-1.988 1.424.106 2.43 1.45 2.307 2.839-.146 1.636-1.698 2.787-3.3 2.626C1.421 7.389.126 5.629.325 3.815.55 1.752 2.519.312 4.547.548 6.82.814 8.406 2.992 8.13 5.232a4.47 4.47 0 01-1.39 2.711"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="matrix(3.54617 0 0 3.75038 .988 .123)"
        strokeWidth={0.713}
      />
    </Svg>
  );
}

const MemoSvgGuruGuru = React.memo(SvgGuruGuru);
export default MemoSvgGuruGuru;
