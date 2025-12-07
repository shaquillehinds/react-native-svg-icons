import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Simcard1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10 18.5H14C15.65 18.5 17 17.15 17 15.5V12.5C17 10.85 15.65 9.5 14 9.5H10C8.35 9.5 7 10.85 7 12.5V15.5C7 17.15 8.35 18.5 10 18.5Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 9.5V18.5" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 14H16.5" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
