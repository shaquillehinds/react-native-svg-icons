import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function KyberNetworkKnc({
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
        d="M11 2.60005L6 5.40005C5.4 5.80005 5 6.40005 5 7.10005V16C5 16.6 5.3 17.3 5.8 17.6L10.8 21.2001C11.5 21.7001 12.4 21.7001 13.1 21.2001L18.1 17.6C18.6 17.2 18.9 16.6 18.9 16V7.20005C18.9 6.50005 18.5 5.80005 17.9 5.50005L12.9 2.60005C12.4 2.20005 11.6 2.20005 11 2.60005Z"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M12 3L10 12L11.8 21.2"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M18.2 16.9L10 12L18.5 7.30005"
        stroke={color || '#17191C'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
