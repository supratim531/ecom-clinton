import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useLogout } from "../../../hooks";
import Tooltip from "../../shared/Tooltip";
import NavItems from "./NavItems";
import Hamburger from "../Hamburger";
import SideNavbar from "./SideNavbar";

const Navbar = (props, ref) => {
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
      className="font-roboto font-medium p-3 flex justify-between items-center text-[#ddd] bg-secondary"
    >
      <section className="left">
        <div className="block md:hidden">
          <Hamburger onClick={handleOpenSideNavbar} />
          <SideNavbar
            sideNavbarRef={sideNavbarRef}
            sideNavbarWrapperRef={sideNavbarWrapperRef}
            handleCloseSideNavbar={handleCloseSideNavbar}
          />
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
      <section className="right flex gap-3">
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
              aria-label="Register as a customer"
              onClick={() => navigate("register")}
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
