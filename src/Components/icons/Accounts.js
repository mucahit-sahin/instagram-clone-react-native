import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAccounts(props) {
  return (
    <Svg
      width={12}
      height={8}
      viewBox="0 0 12 8"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M10.598.151l-4.5 4.5-4.5-4.5L.75 1l5.349 5.349L11.447 1 10.6.151z"
        fill="#262626"
      />
    </Svg>
  );
}

export default SvgAccounts;
