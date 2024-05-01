import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuth } from "../../hooks/useAuth";
import NavItem from "./NavItem";

const Navbar = () => {
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

  return (
    <nav
      role="menubar"
      aria-label="Primary navigation"
      className="font-roboto font-medium p-4 flex justify-between items-center text-[#ddd] bg-secondary"
    >
      <section className="left">
        <section
          role="button"
          className="hamburger cursor-default block md:hidden"
        >
          <button onClick={handleOpenSideNavbar}>
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <section
            ref={sideNavbarWrapperRef}
            className="top-0 left-0 fixed z-[4] w-full h-[100vh] duration-300 invisible opacity-0 bg-black bg-opacity-70"
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
              className="w-[80%] xs:w-[70%] min-[480px]:w-[60%] h-full fixed top-0 left-0 z-[3] duration-300 translate-x-[-200%]"
            >
              {/* sidebar content */}
              <ul
                onClick={handleCloseSideNavbar}
                className="p-8 flex flex-col items-start gap-8 text-white"
              >
                <NavItem />
              </ul>
              {/* sidebar content */}
            </aside>
          </section>
        </section>
        <ul className="hidden capitalize md:flex justify-center items-center gap-6 text-white">
          <NavItem />
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
            <Link to={"login"}>
              <button
                tabIndex={-1}
                aria-label="Login as a customer"
                className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-white hover:bg-primary text-primary bg-white"
              >
                Login
              </button>
            </Link>
            <Link to={"register"}>
              <button
                tabIndex={-1}
                aria-label="Register as a customer"
                className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-primary hover:bg-white text-white bg-primary"
              >
                Register
              </button>
            </Link>
          </>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
