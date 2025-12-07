import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Triangle1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M10.8999 2L0.899902 12L10.8999 22V18L4.8999 12L10.8999 6V2Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.8999 2L22.8999 12L12.8999 22V18L18.8999 12L12.8999 6V2Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.8999 9L7.8999 12L10.8999 15V9Z" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
