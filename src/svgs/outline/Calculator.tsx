import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Calculator({
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
        d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M16.5 7.57996V8.57996C16.5 9.39996 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.40996 7.5 8.57996V7.57996C7.5 6.75996 8.17 6.07996 9 6.07996H15C15.83 6.07996 16.5 6.74996 16.5 7.57996Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M8.13612 14H8.14767"
        stroke={color || '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M11.9952 14H12.0068"
        stroke={color || '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M15.8544 14H15.8659"
        stroke={color || '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M8.13612 17.5H8.14767"
        stroke={color || '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M11.9952 17.5H12.0068"
        stroke={color || '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M15.8544 17.5H15.8659"
        stroke={color || '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
