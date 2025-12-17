import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Wifi({
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
      <PathComponent
        d="M4.91003 11.84C9.21003 8.51998 14.8 8.51998 19.1 11.84"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M2 8.35998C8.06 3.67998 15.94 3.67998 22 8.35998"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M6.79004 15.49C9.94004 13.05 14.05 13.05 17.2 15.49"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M9.40002 19.15C10.98 17.93 13.03 17.93 14.61 19.15"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
