import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Radio({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M17 5H7C4 5 2 7 2 10V17C2 20 4 22 7 22H17C20 22 22 20 22 17V10C22 7 20 5 17 5Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 2V5" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 16C9.88071 16 11 14.8807 11 13.5C11 12.1193 9.88071 11 8.5 11C7.11929 11 6 12.1193 6 13.5C6 14.8807 7.11929 16 8.5 16Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 11H18.5" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 15H15" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18 15H18.5" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
