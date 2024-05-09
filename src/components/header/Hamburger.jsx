import React from "react";

const Hamburger = ({ onClick, className = "" }) => {
  return (
    <button tabIndex={0} onClick={onClick} className={`hamburger ${className}`}>
      <i className="fa-solid fa-bars text-2xl"></i>
    </button>
  );
};

export default Hamburger;
