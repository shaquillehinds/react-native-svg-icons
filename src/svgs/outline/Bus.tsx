import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Bus({
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
        d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M8.49451 17.7H8.50349"
        stroke={color || '#292D32'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M15.4945 17.7H15.5035"
        stroke={color || '#292D32'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M9.5 5H14.5"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
