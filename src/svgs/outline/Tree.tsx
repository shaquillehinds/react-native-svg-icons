import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Tree({
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
        d="M16.17 10.0599H7.82994C6.64995 10.0599 6.23995 9.26994 6.92995 8.30994L11.1 2.46995C11.59 1.76995 12.41 1.76995 12.89 2.46995L17.06 8.30994C17.76 9.26994 17.35 10.0599 16.17 10.0599Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M17.59 17.9999H6.41998C4.83998 17.9999 4.29998 16.9499 5.22998 15.6699L9.21997 10.0599H14.79L18.78 15.6699C19.71 16.9499 19.17 17.9999 17.59 17.9999Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M12 22V18"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
