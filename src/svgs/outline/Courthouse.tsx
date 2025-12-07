import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Courthouse({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M2 22H22" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 5V8" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4.58008 12H19.4201" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.98999 12V22" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
<Path d="M11.99 12V22" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
<Path d="M15.99 12V22" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
</Svg>
);
}
