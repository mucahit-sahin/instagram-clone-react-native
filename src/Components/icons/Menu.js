import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMenu(props) {
  return (
    <Svg
      width={21}
      height={18}
      viewBox="0 0 21 18"
      fill="none"
      className=""
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.25 0h-19l-.102.007A.75.75 0 001.25 1.5h19l.102-.007A.75.75 0 0020.25 0zm-19 8h19a.75.75 0 01.102 1.493l-.102.007h-19a.75.75 0 01-.102-1.493L1.25 8zm0 8h19a.75.75 0 01.102 1.493l-.102.007h-19a.75.75 0 01-.102-1.493L1.25 16z"
        fill="#262626"
      />
    </Svg>
  );
}

export default SvgMenu;
