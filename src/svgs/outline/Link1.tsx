import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Link1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
