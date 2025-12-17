import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Grid6({
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
        d="M22 7.74922H9.75V1.94922H16.19C19.83 1.94922 22 4.11922 22 7.74922Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M22 16.25C21.95 19.82 19.79 21.95 16.19 21.95H9.75V16.25H22Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M8.25 1.94922V21.9492H7.81C4.17 21.9492 2 19.7792 2 16.1392V7.75922C2 4.11922 4.17 1.94922 7.81 1.94922H8.25Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <PathComponent
        d="M22 9.25H9.75V14.75H22V9.25Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
    </Svg>
  );
}
