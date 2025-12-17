import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export default function Ruler({
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
  const PathComponent = useCallback(
    (props: PathProps) => {
      if (!animate) return <Path {...props} />;
      if (animate.mode === 'AnimatedPathProps')
        return <AnimateSVGPathValuesComponent pathProps={props} {...animate} />;
      return (
        <AnimateSVGPathValueComponent
          {...animate}
          pathProps={(value, options) => ({
            ...props,
            ...animate.pathProps(value, options),
          })}
        />
      );
    },
    [animate, pathProps]
  );
  return (
    <Svg
      width={normalize(size || 24)}
      height={normalize(size || 24)}
      viewBox="0 0 24 24"
      fill="none"
      {...svgProps}
    >
      <G clipPath="url(#clip0_3125_33423)">
        <PathComponent
          d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          {...pathProps}
        />
        <PathComponent
          d="M18 7V12"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          {...pathProps}
        />
        <PathComponent
          d="M6 7V11"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          {...pathProps}
        />
        <PathComponent
          d="M10.05 7L10 12"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          {...pathProps}
        />
        <PathComponent
          d="M14 7V10"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          {...pathProps}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3125_33423">
          <Rect width="24" height="24" fill={color || 'white'} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
