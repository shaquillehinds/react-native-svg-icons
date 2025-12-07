import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function OceanProtocolOcean({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M12 3.19995V3.20995" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 7.69995V7.70995" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 11.7V11.71" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 15.7V15.71" stroke={color || '#17191C'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 19.2V19.21" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 22.2V22.21" stroke={color || '#17191C'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.5 7.69995V7.70995" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20.5 7.69995V7.70995" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20.5 11.7V11.71" stroke={color || '#17191C'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.5 11.7V11.71" stroke={color || '#17191C'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20.5 14.7V14.71" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20.5 17.7V17.71" stroke={color || '#17191C'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.5 14.7V14.71" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.5 17.7V17.71" stroke={color || '#17191C'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.7998 9.69995V9.70995" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.75 5.5V5.51" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.2002 9.69995V9.70995" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.25 5.5V5.51" stroke={color || '#17191C'} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.7998 13.7V13.71" stroke={color || '#17191C'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.7998 16.7V16.71" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.7998 19.7V19.71" stroke={color || '#17191C'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.2002 13.7V13.71" stroke={color || '#17191C'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.2002 16.7V16.71" stroke={color || '#17191C'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.2002 19.7V19.71" stroke={color || '#17191C'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
