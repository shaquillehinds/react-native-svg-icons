import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Be({
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
        d="M2 12H9C10.7 12 12 13.3 12 15C12 16.7 10.7 18 9 18H3C2.4 18 2 17.6 2 17V7C2 6.4 2.4 6 3 6H8C9.7 6 11 7.3 11 9C11 10.7 9.7 12 8 12H2Z"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        {...pathProps}
      />
      <Path
        d="M14 14H22C22 11.8 20.2 10 18 10C15.8 10 14 11.8 14 14ZM14 14C14 16.2 15.8 18 18 18H19.7"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M19.5 7.5H16.5"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
