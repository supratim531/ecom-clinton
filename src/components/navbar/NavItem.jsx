import React from "react";
import { Link } from "react-router-dom";

const NavItem = () => {
  return (
    <>
      <li className="text-2xl md:text-base hover:text-primary">
        <Link to={""}>Home</Link>
      </li>
      <li className="text-2xl md:text-base hover:text-primary">
        <Link to={"about"}>About</Link>
      </li>
      <li className="text-2xl md:text-base hover:text-primary">
        <Link to={"contact"}>Contact</Link>
      </li>
      <li className="text-2xl md:text-base hover:text-primary">
        <Link to={"products"}>Products</Link>
      </li>
    </>
  );
};

export default NavItem;
