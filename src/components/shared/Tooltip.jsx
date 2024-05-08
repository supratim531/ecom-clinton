import React from "react";

const Tooltip = ({ text, children, className = "", textClassName = "" }) => {
  return (
    <div className={`tooltip ${className}`}>
      <span className={`tooltip-text ${textClassName}`}>{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
