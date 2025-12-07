import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function NemXem({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M2 4.99992C2 4.99992 12 1.00008 22 4.99992C22 4.99992 22 15.9999 12 21.9999C12 21.9999 2 16.9999 2 4.99992Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10"/>
<Path d="M2.1001 7.10005C5.2001 17.1 12.0001 10 12.0001 10C11.0001 4.00005 16.1001 2.90005 16.1001 2.90005L16.7001 2.80005" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.4 18.5C16.4 18.5 19 13 12 10" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
