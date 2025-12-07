import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function AvalancheAvax({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M6.10004 15.5999L11.7 5.9999C11.9 5.6999 12.3 5.6999 12.5 5.9999L14 7.9999C14.4 8.5999 14.5 9.3999 14.1 9.9999L10.8 15.2999C10.5 15.7999 9.90004 16.1999 9.30004 16.1999H6.40004C6.10004 16.2999 5.90004 15.8999 6.10004 15.5999Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.2001 12.3998L13.3001 15.5998C13.1001 15.8998 13.3001 16.2998 13.7001 16.2998H17.5001C17.9001 16.2998 18.1001 15.8998 17.9001 15.5998L16.0001 12.3998C15.8001 12.0998 15.4001 12.0998 15.2001 12.3998Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10"/>
</Svg>
);
}
