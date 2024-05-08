import React from "react";
import { logo, smallLogo } from "../../assets";
import { screenWidth } from "../../utils/screen";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      src={screenWidth >= 370 ? logo : smallLogo}
      alt="Logo"
      className={`cursor-pointer ${screenWidth >= 370 ? "w-auto" : "w-[32px]"}`}
      width={screenWidth >= 370 ? 122 : 192}
      height={screenWidth >= 370 ? 23 : 192}
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
