import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Message2({
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
        d="M8.5 10.5H15.5"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
