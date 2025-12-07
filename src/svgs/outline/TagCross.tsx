import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function TagCross({
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
        d="M10.2801 20.25H17.0001C19.7601 20.25 22.0001 18.01 22.0001 15.25V8.75C22.0001 5.99 19.7601 3.75 17.0001 3.75H10.2801C8.87005 3.75 7.53005 4.34 6.58005 5.39L3.05005 9.27C1.64005 10.82 1.64005 13.18 3.05005 14.73L6.58005 18.61C7.53005 19.66 8.87005 20.25 10.2801 20.25Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M16.0001 14.47L11.0601 9.53003"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <Path
        d="M11.0601 14.47L16.0001 9.53003"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
    </Svg>
  );
}
