import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Microphone({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.11011 7.47993C10.8901 6.82993 12.8301 6.82993 14.6101 7.47993" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.03 10.4799C11.23 10.1499 12.5 10.1499 13.7 10.4799" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
