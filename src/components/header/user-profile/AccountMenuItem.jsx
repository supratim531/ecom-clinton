import React from "react";
import { Link } from "react-router-dom";

const AccountMenuItem = ({ accountMenuItem }) => {
  return (
    <Link
      to={accountMenuItem.path}
      className="p-4 pr-2 w-full text-sm font-medium flex items-center gap-4 rounded-sm hover:bg-gray-100 text-slate-600"
    >
      <span>{accountMenuItem.icon}</span>
      <span>{accountMenuItem.label}</span>
    </Link>
  );
};

export default AccountMenuItem;
