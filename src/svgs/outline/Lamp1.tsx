import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Lamp1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M20.78 13.6499V18.5899H3.21997V13.6499C3.21997 8.82993 7.11997 4.92993 11.94 4.92993H12.06C16.88 4.92993 20.78 8.82993 20.78 13.6499Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 2V4.92999" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.65 18.59C15.52 20.5 13.93 22 12 22C10.07 22 8.47998 20.5 8.34998 18.59H15.65Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
