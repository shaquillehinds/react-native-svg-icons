import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Ship({
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
        d="M20.42 12.3699C21.29 12.7199 21.83 13.7499 21.63 14.6599L21.22 16.5199C20.51 19.7199 18 21.9999 14.38 21.9999H9.61998C5.99998 21.9999 3.48999 19.7199 2.77999 16.5199L2.36998 14.6599C2.16998 13.7499 2.70997 12.7199 3.57997 12.3699L4.99999 11.7999L10.51 9.58993C11.47 9.20993 12.53 9.20993 13.49 9.58993L19 11.7999L20.42 12.3699Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M12 22V10"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
