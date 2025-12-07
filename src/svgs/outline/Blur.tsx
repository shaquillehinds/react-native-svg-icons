import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Blur({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49001 3.66 3.87997 8.39 3.90997 13.9C3.90997 18.36 7.54001 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeMiterlimit="10"/>
<Path d="M12 2V22" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 18.96L19.7 15.22" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 13.9599L19.37 10.3799" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 8.96001L17.03 6.51001" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
