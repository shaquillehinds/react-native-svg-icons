import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function square({
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
        d="M12 17V19.38C12 21.25 11.25 22 9.37 22H4.62C2.75 22 2 21.25 2 19.38V14.63C2 12.75 2.75 12 4.62 12H7V14.37C7 16.25 7.75 17 9.62 17H12Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M17 12V14.37C17 16.25 16.25 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12V9.37C12 11.25 12.75 12 14.62 12H17Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
