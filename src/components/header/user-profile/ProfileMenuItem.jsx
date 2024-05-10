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
          className={`absolute font-medium px-[1px] pt-[1px] min-w-4 h-4 lg:p-0.5 lg:min-w-5 lg:h-5 rounded-full flex items-center justify-center text-[10px] lg:text-xs text-white bg-primary ${countClassName}`}
        >
          {count}
        </div>
      )}
    </Link>
  );
};

export default ProfileMenuItem;
