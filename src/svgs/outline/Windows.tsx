import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Windows({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M22 2L12 4V11H22V2Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M22 22L12 20V13H22V22Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10 4.30005L2 6.00005V11H10V4.30005Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10 19.7L2 18V13H10V19.7Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
