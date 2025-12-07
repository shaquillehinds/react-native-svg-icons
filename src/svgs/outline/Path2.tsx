import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export default function Path2({
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
      <G clipPath="url(#clip0_3125_33418)">
        <Path
          d="M9.87001 22.0001H14.16C15.78 22.0001 16.85 20.8401 16.53 19.4301L15.84 16.3501H8.20001L7.51001 19.4301C7.20001 20.7601 8.34001 22.0001 9.87001 22.0001Z"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathProps}
        />
        <Path
          d="M15.83 16.3501L18.77 13.7401C20.41 12.2801 20.48 11.2601 19.18 9.61012L13.99 3.03012C12.9 1.65012 11.12 1.65012 10.02 3.03012L4.84 9.61012C3.54 11.2601 3.54 12.3301 5.25 13.7401L8.19 16.3501"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathProps}
        />
        <Path
          d="M12.01 2.66992V6.96992"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...pathProps}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3125_33418">
          <Rect width="24" height="24" fill={color || 'white'} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
