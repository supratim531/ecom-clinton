import React from "react";
import NavItems from "./NavItems";

const SideNavbar = ({
  sideNavbarRef,
  sideNavbarWrapperRef,
  handleCloseSideNavbar,
}) => {
  return (
    <section
      role="menu"
      aria-label="Sidebar area for small devices"
      ref={sideNavbarWrapperRef}
      className="sidebar-wrapper top-0 left-0 fixed z-[4] w-full h-[100vh] duration-300 invisible opacity-0 bg-black bg-opacity-70"
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
  );
};

export default SideNavbar;
