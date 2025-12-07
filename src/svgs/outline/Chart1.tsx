import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Chart1({
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M15.5 18.5C16.6 18.5 17.5 17.6 17.5 16.5V7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5V16.5C13.5 17.6 14.39 18.5 15.5 18.5Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
