import React from "react";
import AccountMenu from "./AccountMenu";
import ProfileMenu from "./ProfileMenu";

const UserProfile = () => {
  return (
    <section aria-label="User profile" className="flex items-center gap-4">
      <ProfileMenu />
      <AccountMenu />
    </section>
  );
};

export default UserProfile;
