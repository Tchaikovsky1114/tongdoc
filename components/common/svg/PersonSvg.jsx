import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PersonSvg = ({focused}) => {
  console.log(focused);
  if(focused){
    return (
      <Svg
        width={25}
        height={22}
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12.6006 10.4004C15.1965 10.4004 17.3008 8.29607 17.3008 5.70021C17.3008 3.10436 15.1965 1 12.6006 1C10.0047 1 7.90039 3.10436 7.90039 5.70021C7.90039 8.29607 10.0047 10.4004 12.6006 10.4004Z"
          stroke="#2D63E2"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.2002 20.9999C3.2002 15.3935 7.40943 10.8494 12.6006 10.8494C17.7918 10.8494 22.0019 15.3935 22.0019 20.9999"
          stroke="#2D63E2"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }else{
    return (
      <Svg
        width={25}
        height={22}
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <Path
          d="M12.6006 10.4004C15.1965 10.4004 17.3008 8.29607 17.3008 5.70021C17.3008 3.10436 15.1965 1 12.6006 1C10.0047 1 7.90039 3.10436 7.90039 5.70021C7.90039 8.29607 10.0047 10.4004 12.6006 10.4004Z"
          stroke="#333333"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.2002 20.9999C3.2002 15.3935 7.40943 10.8494 12.6006 10.8494C17.7918 10.8494 22.0019 15.3935 22.0019 20.9999"
          stroke="#333333"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }


}
export default PersonSvg;