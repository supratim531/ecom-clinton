import React from "react";

const Tooltip = ({ text, children, className = "" }) => {
  return (
    <div className={`tooltip ${className}`}>
      <span className="tooltip-text">{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
