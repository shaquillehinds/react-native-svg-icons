import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function VelasVlx({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M2 3H22" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.99988 6.3999H19.9999C20.8999 6.3999 21.3999 7.3999 20.8999 8.0999L12.8999 20.4999C12.4999 21.1999 11.4999 21.1999 10.9999 20.4999L2.99988 8.0999C2.59988 7.2999 3.19988 6.3999 3.99988 6.3999Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
