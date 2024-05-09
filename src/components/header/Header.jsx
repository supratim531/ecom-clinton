import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../hooks";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import NavItems from "./navbar/NavItems";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import UserProfile from "./user-profile/UserProfile";

const Header = () => {
  const { auth } = useAuth();
  const headerRef = useRef();
  const navbarRef = useRef();
  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry.target);
        // console.log(entry.isIntersecting);
        setFixedHeader(!entry.isIntersecting);
      });
    });

    observer.observe(headerRef.current);
  }, []);

  return (
    <header ref={headerRef} className="flex flex-col bg-[#f0f5ff]">
      {fixedHeader && (
        <section className="fixed-header fixed top-0 left-0 z-[2] w-full shadow shadow-gray-400 bg-white">
          <section className="p-3 flex flex-col gap-3">
            <section className="flex justify-between items-center gap-10">
              <div aria-label="Primary navigation">
                <div className="block md:hidden">
                  <Hamburger
                    onClick={navbarRef.current.handleOpenSideNavbar}
                    className="text-secondary"
                  />
                </div>
                <div className="hidden md:block">
                  <NavItems
                    wrapperClassName={
                      "capitalize flex justify-center items-center gap-6"
                    }
                    navItemClassName={
                      "font-medium text-secondary hover:text-primary"
                    }
                  />
                </div>
              </div>
              <div
                aria-label="Search for Products, Brands and More"
                className="hidden lg:block flex-grow"
              >
                <SearchBar />
              </div>
              {auth?.user && <UserProfile />}
            </section>
            <section
              aria-label="Search for Products, Brands and More"
              className="block lg:hidden"
            >
              <SearchBar />
            </section>
          </section>
        </section>
      )}

      <Navbar ref={navbarRef} />
      <section className="p-3 flex flex-col gap-3">
        <section className="flex justify-between items-center gap-10">
          <div aria-label="Website logo" className="logo">
            <Logo />
          </div>
          <div
            aria-label="Search for Products, Brands and More"
            className="hidden lg:block flex-grow"
          >
            <SearchBar />
          </div>
          {auth?.user && <UserProfile />}
        </section>
        <section
          aria-label="Search for Products, Brands and More"
          className="block lg:hidden"
        >
          <SearchBar />
        </section>
      </section>
    </header>
  );
};

export default Header;
