import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Received({
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
        d="M5 17.5L19 3.5"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M5 7.22998V17.5H15.27"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M3.5 22H20.5"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
