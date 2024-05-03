import React from "react";

const Hamburger = ({ onClick }) => {
  return (
    <button tabIndex={0} onClick={onClick} className="hamburger">
      <i className="fa-solid fa-bars text-2xl"></i>
    </button>
  );
};

export default Hamburger;
