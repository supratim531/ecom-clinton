import React from "react";
import { order } from "../../../assets";
import AccountMenuItem from "./AccountMenuItem";

const AccountMenu = () => {
  const accountMenuItems = [
    {
      label: "My Orders",
      icon: <img src={order} alt="Order Logo" />,
      path: "/login",
    },
    {
      label: "My Profile",
      icon: <i className="fa-solid fa-user text-primary"></i>,
      path: "/login",
    },
    {
      label: "My Addresses",
      icon: <i className="fa-solid fa-location-dot text-primary"></i>,
      path: "/login",
    },
  ];

  return (
    <section
      aria-label="User's account menu"
      className="account-menu group cursor-pointer relative transition text-center text-gray-700 hover:text-primary"
    >
      <div className="text-base sm:text-xl lg:text-2xl">
        <i className="fa-regular fa-user"></i>
      </div>
      <div className="text-xs leading-3">Account</div>
      <div
        role="tooltip"
        className="account-menu-tooltip z-[1] cursor-pointer w-[200px] invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -left-[150px] duration-200 rounded-sm shadow shadow-gray-400 text-black bg-white"
      >
        <ul className="w-full flex flex-col text-nowrap divide-y rounded-sm">
          {accountMenuItems.map((accountMenuItem) => (
            <li key={accountMenuItem.label}>
              <AccountMenuItem accountMenuItem={accountMenuItem} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AccountMenu;
