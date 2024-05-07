import React from "react";
import { logo, smallLogo } from "../../assets";
import { screenWidth } from "../../utils/screen";

const Logo = () => {
  return (
    <img
      src={screenWidth >= 370 ? logo : smallLogo}
      alt="Logo"
      className={screenWidth >= 370 ? "w-auto" : "w-[32px]"}
      width={screenWidth >= 370 ? 122 : 192}
      height={screenWidth >= 370 ? 23 : 192}
    />
  );
};

export default Logo;
