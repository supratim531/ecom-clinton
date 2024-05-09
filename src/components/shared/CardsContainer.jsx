import React from "react";

const CardsContainer = ({ children, className = "", ...props }) => {
  return (
    <section
      className={`px-[10px] sm:px-[1rem] sm:container sm:mx-auto my-16 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default CardsContainer;
