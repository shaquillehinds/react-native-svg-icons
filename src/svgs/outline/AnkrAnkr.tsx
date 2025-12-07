import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function AnkrAnkr({
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
        d="M3.1001 9.8V6.4L12.0001 2L20.9001 6.4V9.8"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M3.1001 14.2V17.6L12.0001 22L20.9001 17.6V14.2"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M12 21.9999V16.3999"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M12.0001 16.4001C14.4302 16.4001 16.4001 14.4302 16.4001 12.0001C16.4001 9.57004 14.4302 7.6001 12.0001 7.6001C9.57004 7.6001 7.6001 9.57004 7.6001 12.0001C7.6001 14.4302 9.57004 16.4001 12.0001 16.4001Z"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        {...pathProps}
      />
    </Svg>
  );
}
