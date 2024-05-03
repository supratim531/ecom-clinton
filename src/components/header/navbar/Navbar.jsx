import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuth } from "../../../hooks/useAuth";
import NavItem from "./NavItem";
import Hamburger from "../Hamburger";

const Navbar = ({}, ref) => {
  const logout = useLogout();
  const { auth } = useAuth();
  const sideNavbarRef = useRef();
  const sideNavbarWrapperRef = useRef();

  const handleOpenSideNavbar = () => {
    sideNavbarRef.current.classList.toggle("translate-x-[-200%]");
    sideNavbarWrapperRef.current.classList.remove("invisible", "opacity-0");
  };

  const handleCloseSideNavbar = () => {
    sideNavbarRef.current.classList.toggle("translate-x-[-200%]");
    sideNavbarWrapperRef.current.classList.add("invisible", "opacity-0");
  };

  useImperativeHandle(ref, () => ({
    handleOpenSideNavbar: () => handleOpenSideNavbar(),
    handleCloseSideNavbar: () => handleCloseSideNavbar(),
  }));

  return (
    <nav
      role="menubar"
      aria-label="Primary navigation"
      className="font-roboto font-medium p-4 flex justify-between items-center text-[#ddd] bg-secondary"
    >
      <section
        role="menu"
        aria-label="Sidebar area for small devices"
        ref={sideNavbarWrapperRef}
        className="sidebar-wrapper block md:hidden top-0 left-0 fixed z-[4] w-full h-[100vh] duration-300 invisible opacity-0 bg-black bg-opacity-70"
      >
        <button
          onClick={handleCloseSideNavbar}
          className="absolute top-2 right-4"
        >
          <i className="fa-solid fa-xmark text-5xl text-white"></i>
        </button>
        <aside
          ref={sideNavbarRef}
          role="menubar"
          aria-label="Primary navigation for small devices"
          className="sidebar w-[80%] xs:w-[70%] min-[480px]:w-[60%] h-full fixed top-0 left-0 z-[3] duration-300 translate-x-[-200%]"
        >
          <ul className="p-8 h-full w-full flex flex-col items-start gap-8 text-white">
            <NavItem
              onClickListItem={handleCloseSideNavbar}
              listClassName={"text-2xl md:text-base hover:text-primary"}
            />
          </ul>
        </aside>
      </section>

      <section className="left">
        <div className="block md:hidden">
          <Hamburger onClick={handleOpenSideNavbar} />
        </div>
        <ul className="hidden capitalize md:flex justify-center items-center gap-6">
          <NavItem listClassName="font-medium text-lg text-white hover:text-primary" />
        </ul>
      </section>
      <section className="right flex justify-center items-center gap-4">
        {auth?.user ? (
          <button
            tabIndex={0}
            title="Logout"
            aria-label="Logout from this session"
            onClick={logout}
            className="text-[0.8rem] sm:text-base text-center p-2 py-1.5 rounded-full duration-100 hover:text-white hover:bg-primary text-primary bg-white"
          >
            <i className="fa-solid fa-power-off text-lg"></i>
          </button>
        ) : (
          <>
            <Link
              to={"login"}
              role="button"
              tabIndex={0}
              aria-label="Login as a customer"
              className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-white hover:bg-primary text-primary bg-white"
            >
              Login
            </Link>
            <Link
              to={"register"}
              role="button"
              tabIndex={0}
              aria-label="Register as a customer"
              className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-primary hover:bg-white text-white bg-primary"
            >
              Register
            </Link>
          </>
        )}
      </section>
    </nav>
  );
};

export default forwardRef(Navbar);
