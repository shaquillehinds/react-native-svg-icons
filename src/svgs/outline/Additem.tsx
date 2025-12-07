import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export default function Additem({
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
      <G clipPath="url(#clip0_3125_33409)">
        <Path
          d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathProps}
        />
        <Path
          d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathProps}
        />
        <Path
          d="M14.87 15H18.13"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathProps}
        />
        <Path
          d="M16.5 16.6301V13.3701"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathProps}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3125_33409">
          <Rect width="24" height="24" fill={color || 'white'} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
