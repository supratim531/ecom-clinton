import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import Navbar from "./navbar/Navbar";
import { useAuth } from "../../hooks/useAuth";
import UserProfile from "./UserProfile";
import NavItem from "./navbar/NavItem";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Header = () => {
  const { auth } = useAuth();
  const headerRef = useRef();
  const navbarRef = useRef();
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
        <div className="fixed top-0 left-0 z-[2] w-full flex flex-col justify-start shadow shadow-gray-400 bg-white">
          <div className="top px-3 py-2 flex justify-between items-center gap-10">
            <section className="navigation">
              <div className="block md:hidden">
                <Hamburger onClick={navbarRef.current.handleOpenSideNavbar} />
              </div>
              <ul className="hidden capitalize md:flex justify-center items-center gap-6">
                <NavItem listClassName="font-roboto font-medium text-lg text-secondary hover:text-primary" />
              </ul>
            </section>
            <div className="hidden lg:block search-section flex-grow">
              <SearchBar />
            </div>
            {auth?.user && (
              <div className="user-profile-section">
                <UserProfile />
              </div>
            )}
          </div>
          <div className="bottom block lg:hidden px-3 pb-2">
            <SearchBar />
          </div>
        </div>
      )}

      <Navbar ref={navbarRef} />

      <section className="top p-4 flex justify-between items-center gap-10 bg-red-400">
        <div aria-label="Website logo" className="logo">
          <Logo />
        </div>
        <div className="hidden lg:block search-section flex-grow">
          <SearchBar />
        </div>
        {auth?.user && (
          <div className="user-profile-section">
            <UserProfile />
          </div>
        )}
      </section>
      <div className="bottom block lg:hidden pt-0 p-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
