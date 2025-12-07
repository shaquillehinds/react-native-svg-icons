import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Mask({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M19.07 4.93L4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 11.9999C22 17.5199 17.52 21.9999 12 21.9999C9.24 21.9999 6.73999 20.8799 4.92999 19.0699L19.07 4.92993C20.88 6.73993 22 9.23993 22 11.9999Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.76001 16.24L13.41 21.9" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.29 12.71L17.87 19.28" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.83 9.16992L21.12 15.4699" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
