import React from "react";
import ProfileMenuItem from "./ProfileMenuItem";

const ProfileMenu = () => {
  const profileMenuItems = [
    {
      label: "Wishlist",
      icon: <i className="fa-regular fa-heart"></i>,
      count: 0,
      countClassName: "-top-1.5 right-0",
      path: "/login",
    },
    {
      label: "Cart",
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      count: 3,
      countClassName: "-top-1.5 -right-2",
      path: "/login",
    },
  ];

  return (
    <ul aria-label="User's profile menu" className="flex items-center gap-4">
      {profileMenuItems.map((profileMenuItem) => (
        <li key={profileMenuItem.label}>
          <ProfileMenuItem
            icon={profileMenuItem.icon}
            path={profileMenuItem.path}
            label={profileMenuItem.label}
            count={profileMenuItem.count}
            countClassName={profileMenuItem.countClassName}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProfileMenu;
