import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function ExternalDrive({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M16 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H16C19 2 21 4 21 7V17C21 20 19 22 16 22Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 15H21" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 12H8" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 9.5H8" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 7H8" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.4945 18.25H16.5035" stroke={color || '#292D32'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
