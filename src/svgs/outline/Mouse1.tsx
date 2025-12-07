import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function Mouse1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M16.1499 12.83L14.4199 13.41C13.9399 13.57 13.5699 13.94 13.4099 14.42L12.8299 16.15C12.3399 17.64 10.2399 17.61 9.77994 16.12L7.82994 9.84C7.44994 8.59 8.59994 7.44001 9.82994 7.82001L16.1199 9.76999C17.6099 10.24 17.6299 12.34 16.1499 12.83Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
