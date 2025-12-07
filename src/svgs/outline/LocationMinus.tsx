import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function LocationMinus({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M9.25 11H14.75" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round"/>
<Path d="M3.61995 8.49C5.58995 0.169998 18.42 0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke={color || '#292D32'} strokeWidth="1.5"/>
</Svg>
);
}
