import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuth } from "../../../hooks/useAuth";
import NavItems from "./NavItems";
import Hamburger from "../Hamburger";
import Tooltip from "../../shared/Tooltip";

const Navbar = ({}, ref) => {
  const logout = useLogout();
  const { auth } = useAuth();
  const navigate = useNavigate();
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
          <div>
            <NavItems
              onClickNavItem={handleCloseSideNavbar}
              wrapperClassName={
                "p-8 h-full w-full flex flex-col items-start gap-8 text-white"
              }
              navItemClassName={"text-2xl md:text-base hover:text-primary"}
            />
          </div>
        </aside>
      </section>

      <section className="left">
        <div className="block md:hidden">
          <Hamburger onClick={handleOpenSideNavbar} />
        </div>
        <div className="hidden md:block">
          <NavItems
            wrapperClassName={
              "capitalize flex justify-center items-center gap-6"
            }
            navItemClassName={"font-medium text-white hover:text-primary"}
          />
        </div>
      </section>
      <section className="right flex gap-4">
        {auth?.user ? (
          <Tooltip
            text={"Logout"}
            className="[&>span]:!-bottom-[90%] [&>span]:after:!border-b-primary [&>span]:after:!border-t-transparent [&>span]:after:!-top-[35%]"
          >
            <button
              tabIndex={0}
              aria-label="Logout from this session"
              onClick={logout}
              className="text-[0.8rem] sm:text-base text-center p-2 py-1.5 rounded-full duration-100 hover:text-white hover:bg-primary text-primary bg-white"
            >
              <i className="fa-solid fa-power-off text-lg"></i>
            </button>
          </Tooltip>
        ) : (
          <>
            <button
              tabIndex={0}
              aria-label="Login as a customer"
              onClick={() => navigate("login")}
              className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-white hover:bg-primary text-primary bg-white"
            >
              Login
            </button>
            <button
              tabIndex={0}
              onClick={() => navigate("register")}
              aria-label="Register as a customer"
              className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-primary hover:bg-white text-white bg-primary"
            >
              Register
            </button>
          </>
        )}
      </section>
    </nav>
  );
};

export default forwardRef(Navbar);
