import React from "react";
import { Link } from "react-router-dom";
import { order } from "../../assets";

const UserProfile = () => {
  return (
    <section
      aria-label="User profile menu"
      className="flex items-center space-x-4"
    >
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
        aria-label="Profile options"
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
    </section>
  );
};

export default UserProfile;
