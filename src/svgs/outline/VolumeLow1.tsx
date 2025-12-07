import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function VolumeLow1({
  size,
  color,
  svgProps,
  pathProps,
}: {
  size?: number;
  color?: string;
  svgProps?: SvgProps;
  pathProps?: PathProps;
}) {
  return (
    <Svg
      width={normalize(size || 24)}
      height={normalize(size || 24)}
      viewBox="0 0 24 24"
      fill="none"
      {...svgProps}
    >
      <Path
        d="M3.32996 10V14C3.32996 16 4.32996 17 6.32996 17H7.75996C8.12996 17 8.49996 17.11 8.81996 17.3L11.74 19.13C14.26 20.71 16.33 19.56 16.33 16.59V7.41003C16.33 4.43003 14.26 3.29003 11.74 4.87003L8.81996 6.70003C8.49996 6.89003 8.12996 7.00003 7.75996 7.00003H6.32996C4.32996 7.00003 3.32996 8.00003 3.32996 10Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        {...pathProps}
      />
      <Path
        d="M19.33 8C21.11 10.37 21.11 13.63 19.33 16"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
