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
    </ul>
  );
};

export default NavItems;
