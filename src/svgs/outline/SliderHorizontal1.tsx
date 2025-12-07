import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function SliderHorizontal1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M5 16.5V7.5C5 6.88 5.02 6.33 5.09 5.84C5.38 3.21 6.62 2.5 10 2.5H14C17.38 2.5 18.62 3.21 18.91 5.84C18.98 6.33 19 6.88 19 7.5V16.5C19 17.12 18.98 17.67 18.91 18.16C18.62 20.79 17.38 21.5 14 21.5H10C6.62 21.5 5.38 20.79 5.09 18.16C5.02 17.67 5 17.12 5 16.5Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 19.5V4.5" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 19V4" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
