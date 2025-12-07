import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Broom({
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
        d="M9.87 5.66998L6.45 7.74999L4.89001 5.19C4.32001 4.25 4.62 3.01 5.56 2.44C6.5 1.87 7.74 2.16998 8.31 3.10998L9.87 5.66998Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M11.82 9.15997L8.66 11.08C6.82 12.2 6.25999 14.46 7.14999 16.26L9.19999 20.44C9.85999 21.79 11.46 22.26 12.74 21.47L19.17 17.56C20.46 16.78 20.77 15.15 19.88 13.94L17.11 10.2C15.91 8.58001 13.66 8.03997 11.82 9.15997Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M10.7567 5.09791L5.63208 8.21851L7.71248 11.6349L12.8371 8.51431L10.7567 5.09791Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M14.31 16.8101L15.96 19.5201"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M11.75 18.37L13.4 21.08"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M16.87 15.25L18.52 17.96"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
