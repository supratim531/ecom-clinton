import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const logout = useLogout();
  const { auth } = useAuth();

  return (
    // <header>
    //   <h1>Clinton Ecommerce</h1>
    //   <nav aria-label="primary-navigation">
    //     <h2>Navigation</h2>
    //     <ul className="p-4 flex justify-between items-center bg-blue-200">
    //       <div className="flex items-center space-x-4">
    //         <li>
    //           <Link to={""}>Home</Link>
    //         </li>
    //         <li>
    //           <Link to={"about"}>About</Link>
    //         </li>
    //         <li>
    //           <Link to={"contact"}>Contact</Link>
    //         </li>
    //         <li>
    //           <Link to={"products"}>Products</Link>
    //         </li>
    //       </div>
    //       <div className="flex items-center space-x-4">
    //         {auth?.user && (
    //           <>
    //             <li>
    //               <span>{auth?.user?.email}</span>
    //             </li>
    //             <li>
    //               <button
    //                 tabIndex={0}
    //                 aria-label="Logout"
    //                 onClick={logout}
    //                 className="my-2 px-2 outline outline-1 bg-gray-200"
    //               >
    //                 Logout
    //               </button>
    //             </li>
    //           </>
    //         )}
    //         {!auth?.user && (
    //           <>
    //             <li>
    //               <Link to={"login"}>Login</Link>
    //             </li>
    //             <li>
    //               <Link to={"register"}>Register</Link>
    //             </li>
    //           </>
    //         )}
    //       </div>
    //     </ul>
    //   </nav>
    // </header>

    <nav
      aria-label="primary-navigation"
      className="font-roboto font-medium p-4 flex justify-between items-center text-[#ddd] bg-secondary"
    >
      <section className="left">
        <section className="hamburger block md:hidden">
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
            type="button"
            role="Logout User"
            onClick={logout}
            title="Logout"
            className="text-[0.8rem] sm:text-base text-center p-2 py-1.5 rounded-full duration-100 hover:text-white hover:bg-primary text-primary bg-white"
          >
            <i className="fa-solid fa-power-off text-lg"></i>
          </button>
        ) : (
          <>
            <Link to={"login"}>
              <button className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-white hover:bg-primary text-primary bg-white">
                Login
              </button>
            </Link>
            <Link to={"register"}>
              <button className="text-[0.8rem] sm:text-base px-4 py-2 rounded transition hover:text-primary hover:bg-white text-white bg-primary">
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
