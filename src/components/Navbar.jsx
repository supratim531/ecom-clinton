import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const logout = useLogout();
  const { auth } = useAuth();

  return (
    <nav
      role="menubar"
      aria-label="Primary navigation"
      className="font-roboto font-medium p-4 flex justify-between items-center text-[#ddd] bg-secondary"
    >
      <section className="left">
        <section role="menubar" className="hamburger block md:hidden">
          <i className="fa-solid fa-bars text-xl"></i>
        </section>
        <ul className="nav-menu hidden capitalize md:flex justify-center items-center gap-6">
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
          {/* <li>
            <Link to={"products"}>Products</Link>
          </li> */}
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
