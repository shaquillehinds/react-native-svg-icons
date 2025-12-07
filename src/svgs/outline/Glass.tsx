import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Glass({
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
        d="M8.16001 22C3.98001 22 3.14001 19.47 4.50001 16.39L8.75001 6.74H8.45001C7.80001 6.74 7.20001 6.48 6.77001 6.05C6.33001 5.62 6.07001 5.02 6.07001 4.37C6.07001 3.07 7.13001 2 8.44001 2H15.55C16.21 2 16.8 2.27 17.23 2.7C17.79 3.26 18.07 4.08 17.86 4.95C17.59 6.03 16.55 6.74 15.44 6.74H15.28L19.5 16.4C20.85 19.48 19.97 22 15.83 22H8.16001Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M5.94 13.1201C5.94 13.1201 9 13.0001 12 14.0001C15 15.0001 17.83 13.1101 17.83 13.1101"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
