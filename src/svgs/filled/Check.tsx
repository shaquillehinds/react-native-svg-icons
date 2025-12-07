import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Check({
  size,
  color,
  svgProps,
  pathProps,
}: {
  size?: number;
  color?: string;
  svgProps?: SvgProps;
  pathProps?: PathProps;
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
        d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <Path
        d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <Path
        d="M6 4C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20H11C11.55 20 12 19.55 12 19V5C12 4.45 11.55 4 11 4H6ZM7.75 15.5C7.75 15.91 7.41 16.25 7 16.25C6.59 16.25 6.25 15.91 6.25 15.5V8.5C6.25 8.09 6.59 7.75 7 7.75C7.41 7.75 7.75 8.09 7.75 8.5V15.5Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
    </Svg>
  );
}
