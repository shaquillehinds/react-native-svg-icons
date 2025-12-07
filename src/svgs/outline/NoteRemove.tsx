import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function NoteRemove({
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
        d="M7 14H12"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M7 5.95996L3.25 2.20996"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M6.96002 2.25L3.21002 6"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M7 10H15"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M3 9.01001V15.98C3 19.99 4 22 9 22H12C12.17 22 14.84 22 15 22"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M21 16L15 22V19C15 17 16 16 18 16H21Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
