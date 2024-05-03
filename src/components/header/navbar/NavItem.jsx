import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ listClassName, linkClassName, onClickListItem }) => {
  return (
    <>
      <li onClick={onClickListItem} className={listClassName}>
        <Link className={linkClassName} to={""}>
          Home
        </Link>
      </li>
      <li onClick={onClickListItem} className={listClassName}>
        <Link className={linkClassName} to={"about"}>
          About
        </Link>
      </li>
      <li onClick={onClickListItem} className={listClassName}>
        <Link className={linkClassName} to={"contact"}>
          Contact
        </Link>
      </li>
      <li onClick={onClickListItem} className={listClassName}>
        <Link className={linkClassName} to={"products"}>
          Products
        </Link>
      </li>
    </>
  );
};

export default NavItem;
