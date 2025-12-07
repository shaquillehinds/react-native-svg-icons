import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Convert({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12.0051 21.9843C17.5165 21.9843 21.9843 17.5165 21.9843 12.0051C21.9843 6.49372 17.5165 2.02588 12.0051 2.02588C6.49372 2.02588 2.02588 6.49372 2.02588 12.0051C2.02588 17.5165 6.49372 21.9843 12.0051 21.9843Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.13721 4.02173L14.3002 12.2047L14.3202 7.66414" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.8629 19.9784L9.69989 11.8054L9.67993 16.336" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
