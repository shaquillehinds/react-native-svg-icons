import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Grid2({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M11.25 12.75V22H7.81C4.17 22 2 19.83 2 16.19V12.75H11.25Z" fill={color || '#292D32'}/>
<Path d="M22 7.81V11.25H12.75V2H16.19C19.83 2 22 4.17 22 7.81Z" fill={color || '#292D32'}/>
<Path d="M11.25 2V11.25H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill={color || '#292D32'}/>
<Path d="M22 12.75V16.19C22 19.83 19.83 22 16.19 22H12.75V12.75H22Z" fill={color || '#292D32'}/>
</Svg>
);
}
