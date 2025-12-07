import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function RefreshSquare2({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
