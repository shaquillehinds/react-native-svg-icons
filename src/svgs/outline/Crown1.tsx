import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Crown1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M2 15.29V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 7.59002C6.69 7.98002 7.33 7.98002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 7.59002C16.68 7.98002 17.32 7.98002 17.7 7.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
