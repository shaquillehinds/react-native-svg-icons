import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function StatusUp({
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
        d="M6.87988 18.1501V16.0801"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <PathComponent
        d="M12 18.15V14.01"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <PathComponent
        d="M17.1201 18.1499V11.9299"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <PathComponent
        d="M17.1199 5.8501L16.6599 6.3901C14.1099 9.3701 10.6899 11.4801 6.87988 12.4301"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <PathComponent
        d="M14.1899 5.8501H17.1199V8.7701"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <PathComponent
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
