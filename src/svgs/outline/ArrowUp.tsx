import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function ArrowUp({
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
        d="M12 18.0001H9.33004C6.02005 18.0001 4.66005 15.6501 6.32005 12.7801L7.66004 10.4701L9.00005 8.16007C10.66 5.29007 13.37 5.29007 15.03 8.16007L16.37 10.4701L17.71 12.7801C19.37 15.6501 18.01 18.0001 14.7 18.0001H12Z"
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
