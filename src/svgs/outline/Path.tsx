import { normalize } from '@shaquillehinds/react-native-essentials';
import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export default function Path1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <Svg
      width={normalize(size || 24)}
      height={normalize(size || 24)}
      viewBox="0 0 24 24"
      fill="none">
      <G clipPath="url(#clip0_3125_33417)">
        <Path
          d="M19.79 7.27009L16.76 4.24009C15.61 3.09009 14.04 3.15009 13.27 4.38009L11.58 7.05009L16.98 12.4501L19.65 10.7601C20.8 10.0301 20.87 8.35009 19.79 7.27009Z"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.58 7.04996L7.65 6.80996C5.46 6.67996 4.69 7.34996 4.45 9.43996L3.47 17.76C3.26 19.51 4.53 20.77 6.27 20.56L14.59 19.58C16.68 19.33 17.44 18.57 17.22 16.38L16.99 12.45"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.61 19.4199L7.64 16.3799"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3125_33417">
          <Rect width="24" height="24" fill={color || 'white'} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
