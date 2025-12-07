import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function Paperclip({
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
        d="M11.97 12V15.5C11.97 17.43 13.54 19 15.47 19C17.4 19 18.97 17.43 18.97 15.5V10C18.97 6.13 15.84 3 11.97 3C8.09997 3 4.96997 6.13 4.96997 10V16C4.96997 19.31 7.65997 22 10.97 22"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
