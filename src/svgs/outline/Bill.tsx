import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Bill({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M3.67004 2.5V14.47C3.67004 15.45 4.13004 16.38 4.92004 16.97L10.13 20.87C11.24 21.7 12.77 21.7 13.88 20.87L19.09 16.97C19.88 16.38 20.34 15.45 20.34 14.47V2.5H3.67004Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10"/>
<Path d="M2 2.5H22" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<Path d="M8 8H16" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 13H16" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
