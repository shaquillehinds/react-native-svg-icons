import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function MainComponent({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.25 6.25L17.75 17.75" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.75 6.25L6.25 17.75" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
