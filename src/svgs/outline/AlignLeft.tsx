import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function AlignLeft({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M5.1 19.25H16.9C18.4 19.25 19 18.61 19 17.02V15.98C19 14.39 18.4 13.75 16.9 13.75H5.1" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M5.1 5.25H11.9C13.4 5.25 14 5.89 14 7.48V8.52C14 10.11 13.4 10.75 11.9 10.75H5.1" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M5 1.98999V21.99" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
