import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function TextalignCenter({
  size,
  color,
  svgProps,
  pathProps,
  animate,
}: {
  size?: number;
  color?: string;
  svgProps?: SvgProps;
  pathProps?: PathProps;
  animate?: AnimateSVGPathComponentProps;
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
        d="M3 4.5H21"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M7.26001 9.5H16.74"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M3 14.5H21"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M7.26001 19.5H16.74"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
