import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Zoom({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M6 9.70005V12.5C6 14 7.3 15.3 8.8 15.3H12.5C13 15.3 13.4 14.9 13.4 14.4V11.6C13.4 10.1 12.2 8.80005 10.6 8.80005H6.9C6.4 8.80005 6 9.20005 6 9.70005Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18 9.19995V14.8L15.2 12.9V11.1L18 9.19995Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10"/>
</Svg>
);
}
