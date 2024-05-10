import React from "react";
import { Link } from "react-router-dom";

const ProfileMenuItem = ({
  icon,
  path,
  label,
  count,
  className = "",
  countClassName = "",
}) => {
  return (
    <Link
      to={path}
      className={`cursor-pointer transition text-center text-gray-700 hover:text-primary ${className}`}
    >
      <div className="text-base sm:text-xl lg:text-2xl">{icon}</div>
      <div className="text-xs leading-3">{label}</div>
      {count !== 0 && (
        <div
          className={`absolute px-0.5 min-w-5 h-5 rounded-full flex items-center justify-center text-xs text-white bg-primary ${countClassName}`}
        >
          {count}
        </div>
      )}
    </Link>
  );
};

export default ProfileMenuItem;
