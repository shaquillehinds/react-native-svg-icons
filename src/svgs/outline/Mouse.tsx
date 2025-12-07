import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Mouse({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12 22C16.13 22 19.5 18.63 19.5 14.5V9.5C19.5 5.37 16.13 2 12 2C7.87 2 4.5 5.37 4.5 9.5V14.5C4.5 18.63 7.87 22 12 22Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 11C11.17 11 10.5 10.33 10.5 9.5V7.5C10.5 6.67 11.17 6 12 6C12.82 6 13.5 6.67 13.5 7.5V9.5C13.5 10.33 12.82 11 12 11Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 6V2" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
