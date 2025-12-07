import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function RecordCircle({
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
        d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM11.9987 16.23C9.65875 16.23 7.76875 14.34 7.76875 12C7.76875 9.66 9.65875 7.77 11.9987 7.77C14.3387 7.77 16.2287 9.66 16.2287 12C16.2287 14.34 14.3387 16.23 11.9987 16.23Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
    </Svg>
  );
}
