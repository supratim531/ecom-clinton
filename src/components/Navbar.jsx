import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const logout = useLogout();
  const { auth } = useAuth();

  return (
    <header>
      <h1>Clinton Ecommerce</h1>
      <nav aria-label="primary-navigation">
        <h2>Navigation</h2>
        <ul className="p-4 flex justify-between items-center bg-blue-200">
          <div className="flex items-center space-x-4">
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"products"}>Products</Link>
            </li>
          </div>
          <div className="flex items-center space-x-4">
            {auth?.user && (
              <>
                <li>
                  <span>{auth?.user?.email}</span>
                </li>
                <li>
                  <button
                    tabIndex={0}
                    aria-label="Logout"
                    onClick={logout}
                    className="my-2 px-2 outline outline-1 bg-gray-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
            {!auth?.user && (
              <>
                <li>
                  <Link to={"login"}>Login</Link>
                </li>
                <li>
                  <Link to={"register"}>Register</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
