import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({
  className = "text-2xl md:text-base hover:text-primary",
}) => {
  return (
    <>
      <li className={className}>
        <Link to={""}>Home</Link>
      </li>
      <li className={className}>
        <Link to={"about"}>About</Link>
      </li>
      <li className={className}>
        <Link to={"contact"}>Contact</Link>
      </li>
      <li className={className}>
        <Link to={"products"}>Products</Link>
      </li>
    </>
  );
};

export default NavItem;
