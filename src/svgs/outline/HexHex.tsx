import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function HexHex({
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
        d="M17 3.30005H7L2 12L7 20.7001H17L22 12L17 3.30005Z"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        {...pathProps}
      />
      <Path
        d="M10.9001 14H7.0001L5.1001 17.3L7.0001 20.7H10.9001L12.8001 17.3L10.9001 14Z"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        {...pathProps}
      />
      <Path
        d="M14.2999 8H6.9999L3.3999 14.3L6.9999 20.7H14.2999L17.9999 14.3L14.2999 8Z"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        {...pathProps}
      />
    </Svg>
  );
}
