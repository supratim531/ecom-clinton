import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ onClickNavItem, wrapperClassName, navItemClassName }) => {
  const navItems = [
    {
      name: "Home",
      path: "",
      active: true,
    },
    {
      name: "About",
      path: "about",
      active: true,
    },
    {
      name: "Contact",
      path: "contact",
      active: true,
    },
    {
      name: "Products",
      path: "products",
      active: true,
    },
  ];

  return (
    <ul className={wrapperClassName}>
      {navItems.map((navItem) =>
        navItem.active ? (
          <li
            key={navItem.name}
            className={navItemClassName}
            onClick={onClickNavItem ? onClickNavItem : null}
          >
            <NavLink to={navItem.path}>{navItem.name}</NavLink>
          </li>
        ) : null
      )}

      {/* <li onClick={onClickListItem} className={listClassName}>
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
      </li> */}
    </ul>
  );
};

export default NavItems;
