import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Grid1({
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
        d="M7.75 2V7.8H2C2 4.19 4.15 2.02 7.75 2Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M22 7.8H16.25V2C19.85 2.02 22 4.19 22 7.8Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M22 16.3008C21.96 19.8508 19.82 21.9808 16.25 22.0008V16.3008H22Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M7.75 16.3008V22.0008C4.18 21.9808 2.04 19.8508 2 16.3008H7.75Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M7.75 9.30078H2V14.8008H7.75V9.30078Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M22 9.30078H16.25V14.8008H22V9.30078Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M14.75 9.30078H9.25V14.8008H14.75V9.30078Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M14.75 2H9.25V7.8H14.75V2Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M14.75 16.3008H9.25V22.0008H14.75V16.3008Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
    </Svg>
  );
}
