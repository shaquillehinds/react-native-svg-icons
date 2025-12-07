import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function FlashSlash({
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
        d="M21.7709 2.22891C21.4709 1.92891 20.9809 1.92891 20.6809 2.22891L2.23086 20.6889C1.93086 20.9889 1.93086 21.4789 2.23086 21.7789C2.38086 21.9189 2.57086 21.9989 2.77086 21.9989C2.97086 21.9989 3.16086 21.9189 3.31086 21.7689L21.7709 3.30891C22.0809 3.00891 22.0809 2.52891 21.7709 2.22891Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <Path
        d="M14.8205 3.52087V9.18087L9.1805 14.8209V13.2809H6.0905C4.6905 13.2809 4.3005 12.4209 5.2305 11.3709L12.0005 3.67087L12.8005 2.76087C13.9105 1.50087 14.8205 1.84087 14.8205 3.52087Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
      <Path
        d="M18.7697 12.6287L11.9997 20.3287L11.1997 21.2387C10.0897 22.4987 9.17969 22.1587 9.17969 20.4787V17.8187L16.2797 10.7188H17.9097C19.3097 10.7188 19.6997 11.5787 18.7697 12.6287Z"
        fill={color || '#292D32'}
        {...pathProps}
      />
    </Svg>
  );
}
