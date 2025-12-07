import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function LampSlash({
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
        d="M20.0299 2.47998L4.17993 18.33"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M5.25008 12.9999C4.83008 12.0299 4.58008 10.9799 4.58008 9.89993C4.58008 4.98993 8.80008 1.11993 13.6001 2.16993C15.0601 2.48993 16.3601 3.26993 17.3601 4.34993"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M19.0599 7.30005C20.2799 11.18 18.3099 15.08 15.5199 16.87V18.03C15.5199 18.32 15.6199 18.99 14.6199 18.99H9.41991C8.38991 18.99 8.51991 18.56 8.51991 18.03V16.87C8.03991 16.57 7.58991 16.2 7.15991 15.77"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
