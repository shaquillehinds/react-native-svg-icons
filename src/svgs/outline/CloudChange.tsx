import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function CloudChange({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M8.11003 11.85C5.29003 12.05 5.30003 16.15 8.11003 16.35H14.78C15.59 16.36 16.37 16.05 16.97 15.51C18.95 13.78 17.8901 10.31 15.2901 9.98001C14.3601 4.34001 6.21006 6.48 8.14006 11.85" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
