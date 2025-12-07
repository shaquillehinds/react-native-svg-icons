import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function LocationAdd({
  size,
  color,
  svgProps,
  pathProps,
}: {
  size?: number;
  color?: string;
  svgProps?: SvgProps;
  pathProps?: PathProps;
}) {
  return (
    <Svg
      width={normalize(size || 24)}
      height={normalize(size || 24)}
      viewBox="0 0 24 24"
      fill="none"
      {...svgProps}
    >
      <Path
        d="M9.25 11H14.75"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <Path
        d="M12 13.75V8.25"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <Path
        d="M3.62001 8.49C5.59001 0.169998 18.42 0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        {...pathProps}
      />
    </Svg>
  );
}
