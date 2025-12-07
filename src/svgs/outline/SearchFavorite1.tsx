import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';

export default function SearchFavorite1({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (<Svg width={normalize(size || 24)} height={normalize(size || 24)} viewBox="0 0 24 24" fill="none" >
<Path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 22L20 20" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.4999 6.12996C14.1499 5.02996 14.5599 3.65996 15.7199 3.28996C16.3299 3.08996 17.0799 3.25996 17.5099 3.84996C17.9099 3.23996 18.6899 3.09996 19.2899 3.28996C20.4499 3.65996 20.8599 5.02996 20.5099 6.12996C19.9599 7.87996 18.0399 8.78996 17.5099 8.78996C16.9699 8.78996 15.0699 7.89996 14.4999 6.12996Z" stroke={color || '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
);
}
