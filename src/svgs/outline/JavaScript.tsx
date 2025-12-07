import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function JavaScript({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M4.1001 2H19.9001C20.5001 2 21.0001 2.5 20.9001 3.1L19.1001 19.3C19.1001 19.7 18.8001 20 18.4001 20.2L12.3001 21.9C12.1001 22 11.9001 22 11.8001 21.9L5.7001 20.2C5.3001 20.1 5.0001 19.8 5.0001 19.3L3.1001 3.1C3.1001 2.5 3.5001 2 4.1001 2Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.6 7V16L7.5 15.1" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.4999 7L13.3999 7.4V12.4L16.4999 11.9V15.1L12.8999 16" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
