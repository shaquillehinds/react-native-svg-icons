import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function ArrowLeft({
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
        d="M17.9999 12.0001V14.6701C17.9999 17.9801 15.6499 19.3401 12.7799 17.6801L10.4699 16.3401L8.15995 15.0001C5.28995 13.3401 5.28995 10.6301 8.15995 8.97005L10.4699 7.63005L12.7799 6.29005C15.6499 4.66005 17.9999 6.01005 17.9999 9.33005V12.0001Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
