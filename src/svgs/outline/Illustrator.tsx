import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Illustrator({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M6.69995 16L10.2 8L13.8 16" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 13.3H12.9" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10"/>
<Path d="M16.3 16V10.7" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.3401 8.03418V8.03418" stroke={color || '#17191C'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
