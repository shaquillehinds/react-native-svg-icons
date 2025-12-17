import Svg, { Path } from 'react-native-svg';
import {
  normalize,
  type AnimateSVGPathComponentProps,
  AnimateSVGPathValueComponent,
  AnimateSVGPathValuesComponent,
} from '@shaquillehinds/react-native-essentials';
import { useCallback } from 'react';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function ThorchainRune({
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
        d="M16.3794 17.5692L6.07939 21.9092C5.00939 22.3592 4.07937 21.0292 4.86937 20.1792L12.6794 11.6992L16.7294 15.8192C17.2694 16.3592 17.0894 17.2792 16.3794 17.5692Z"
        fill={color || 'black'}
        {...pathProps}
      />
      <PathComponent
        d="M19.171 3.77114L12.681 11.7011L8.63101 7.60114C8.09101 7.05114 8.27099 6.13114 8.98099 5.84114L17.921 2.09114C18.961 1.65114 19.891 2.90114 19.171 3.77114Z"
        fill={color || 'black'}
        {...pathProps}
      />
    </Svg>
  );
}
