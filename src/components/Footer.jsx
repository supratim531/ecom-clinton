import React from "react";
import methods from "../assets/img/methods.png";

const Footer = () => {
  return (
    <footer className="font-roboto p-4 flex justify-center items-center flex-grow bg-secondary">
      <div className="text-[0.85rem] md:text-base flex flex-col min-[620px]:flex-row justify-center min-[620px]:justify-between items-center gap-4">
        <p className="text-center text-[#ddd]">
          Clinton Commerce &copy; {new Date().getFullYear()} - All Right
          Reserved
        </p>
        <p>
          <img src={methods} alt="methods" className="h-5" loading="lazy" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
