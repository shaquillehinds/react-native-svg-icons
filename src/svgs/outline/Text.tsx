import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Text({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M2.66992 7.17003V5.35003C2.66992 4.20003 3.59992 3.28003 4.73992 3.28003H19.2599C20.4099 3.28003 21.3299 4.21003 21.3299 5.35003V7.17003" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 20.7201V4.11011" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.06006 20.72H15.9401" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
