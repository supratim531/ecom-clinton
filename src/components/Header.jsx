import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { screenWidth } from "../utils/screen";
import { logo, order, smallLogo } from "../assets";

const Header = () => {
  const { auth } = useAuth();
  const headerRef = useRef();
  const [fixedSearchBar, setFixedSearchBar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry.target);
        // console.log(entry.isIntersecting);
        setFixedSearchBar(!entry.isIntersecting);
      });
    });

    observer.observe(headerRef.current);
  }, []);

  return (
    <header ref={headerRef} className="flex flex-col bg-[#f0f5ff]">
      {fixedSearchBar && (
        <div className="p-2 fixed top-0 left-0 z-[2] w-full flex justify-start bg-white">
          <SearchBar />
        </div>
      )}

      <Navbar />
      <div className="top p-4 flex justify-between items-center gap-10">
        <div className="logo-section">
          <img
            src={screenWidth >= 370 ? logo : smallLogo}
            alt="Logo"
            className={screenWidth >= 370 ? "w-auto" : "w-[32px]"}
            width={screenWidth >= 370 ? 122 : 192}
            height={screenWidth >= 370 ? 23 : 192}
          />
        </div>
        <div className="hidden lg:block search-section flex-grow">
          <SearchBar />
        </div>
        {auth?.user && (
          <div className="profile-section">
            <div className="flex items-center space-x-4">
              <Link
                to={"/login"}
                className="cursor-pointer text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-base sm:text-xl lg:text-2xl">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="text-xs leading-3">Wishlist</div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  8
                </div>
              </Link>
              <Link
                to={"/login"}
                className="cursor-pointer text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-base sm:text-xl lg:text-2xl">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="text-xs leading-3">Cart</div>
                <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  2
                </div>
              </Link>
              <section
                role="tooltip"
                aria-label="User profile"
                className="cursor-pointer group relative text-center transition text-gray-700 hover:text-primary"
              >
                <div className="text-base sm:text-xl lg:text-2xl">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div className="text-xs leading-3">Account</div>
                <section className="account-menu z-[1] cursor-pointer w-[200px] invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -left-[150px] duration-200 rounded-md shadow-md border border-slate-300 text-black bg-white">
                  <ul className="w-full flex flex-col text-nowrap">
                    <li>
                      <Link
                        to="/login"
                        className="p-4 pr-2 w-full text-sm font-medium flex items-center border-b gap-4 hover:bg-gray-100 text-slate-600"
                      >
                        <span>
                          <img src={order} alt="Order Logo" />
                        </span>
                        <span>My Orders</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="p-4 pr-2 w-full text-sm font-medium flex items-center border-b gap-4 hover:bg-gray-100 text-slate-600"
                      >
                        <span>
                          <i className="fa-solid fa-user text-primary"></i>
                        </span>
                        <span>My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="p-4 pr-2 w-full text-sm font-medium flex items-center border-b gap-4 hover:bg-gray-100 text-slate-600"
                      >
                        <span>
                          <i class="fa-solid fa-location-dot text-primary"></i>
                        </span>
                        <span>My Addresses</span>
                      </Link>
                    </li>
                  </ul>
                </section>
              </section>
            </div>
          </div>
        )}
      </div>
      <div className="bottom block lg:hidden pt-0 p-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
