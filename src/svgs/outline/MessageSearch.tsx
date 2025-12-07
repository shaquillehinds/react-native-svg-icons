import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function MessageSearch({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.12999 19.15 8.77 18.97 8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 22L21 21" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.9965 11H16.0054" stroke={color || '#292D32'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.9955 11H12.0045" stroke={color || '#292D32'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.99451 11H8.00349" stroke={color || '#292D32'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
