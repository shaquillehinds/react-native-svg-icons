import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Mirror({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z" fill={color || '#292D32'}/>
<Path d="M18 22.75H6C5.59 22.75 5.25 22.41 5.25 22C5.25 21.59 5.59 21.25 6 21.25H18C18.41 21.25 18.75 21.59 18.75 22C18.75 22.41 18.41 22.75 18 22.75Z" fill={color || '#292D32'}/>
</Svg>
);
}
