import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Sort({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M3 7H21" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round"/>
<Path d="M6 12H18" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round"/>
<Path d="M10 17H14" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round"/>
</Svg>
);
}
