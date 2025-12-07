import Svg, { Path } from 'react-native-svg';
import { normalize } from '@shaquillehinds/react-native-essentials';
import type { PathProps, SvgProps } from 'react-native-svg';

export default function MusicPlaylist({
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
        d="M17 22H7C4 22 2 20.5 2 17V12C2 8.5 4 7 7 7H17C20 7 22 8.5 22 12V17C22 20.5 20 22 17 22Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M6 4.5H18"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M9 2H15"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M8.89001 19.1099C9.64664 19.1099 10.26 18.4965 10.26 17.7399C10.26 16.9832 9.64664 16.3699 8.89001 16.3699C8.13338 16.3699 7.52002 16.9832 7.52002 17.7399C7.52002 18.4965 8.13338 19.1099 8.89001 19.1099Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M15.28 16.83V11.4799C15.28 10.3399 14.57 10.18 13.84 10.38L11.1 11.13C10.6 11.27 10.26 11.6599 10.26 12.2299V13.18V13.82V17.74"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M13.91 18.2C14.6667 18.2 15.2801 17.5866 15.2801 16.83C15.2801 16.0733 14.6667 15.46 13.91 15.46C13.1534 15.46 12.54 16.0733 12.54 16.83C12.54 17.5866 13.1534 18.2 13.91 18.2Z"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
      <Path
        d="M10.26 13.83L15.28 12.46"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </Svg>
  );
}
