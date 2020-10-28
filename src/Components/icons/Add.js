import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAdd(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      className=""
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 .25A6.75 6.75 0 0123.75 7v10A6.75 6.75 0 0117 23.75H7A6.75 6.75 0 01.25 17V7A6.75 6.75 0 017 .25h10zm0 1.5H7A5.25 5.25 0 001.75 7v10c0 2.9 2.35 5.25 5.25 5.25h10c2.9 0 5.25-2.35 5.25-5.25V7c0-2.9-2.35-5.25-5.25-5.25zm-4.257 4.148A.75.75 0 0012 5.25l-.102.007-.097.02A.75.75 0 0011.25 6v5.249L6 11.25l-.102.007A.75.75 0 005.25 12l.007.102A.75.75 0 006 12.75l5.25-.001V18l.007.102a.75.75 0 00.743.648l.102-.007A.75.75 0 0012.75 18v-5.25H18l.102-.007A.75.75 0 0018.75 12l-.007-.102A.75.75 0 0018 11.25h-5.25V6l-.007-.102z"
        fill="#262626"
      />
    </Svg>
  );
}

export default SvgAdd;
