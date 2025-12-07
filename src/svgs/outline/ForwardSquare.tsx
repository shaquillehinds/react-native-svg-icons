import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function ForwardSquare({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 15.3802H10.08C8.38 15.3802 7 14.0002 7 12.3002C7 10.6002 8.38 9.22021 10.08 9.22021H16.85" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.4299 10.7701L16.9999 9.19012L15.4299 7.62012" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
