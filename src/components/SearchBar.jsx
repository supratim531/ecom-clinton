import React from "react";

const SearchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full relative flex">
      <label
        htmlFor="search"
        className="absolute left-3 sm:left-4 top-2.5 sm:top-3 sm:text-lg text-gray-400"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="text-[0.8rem] sm:text-base w-full pl-8 sm:pl-12 py-2 pr-2 sm:py-3 sm:pr-3 rounded-l-md border-r-0 border-primary focus:ring-0 focus:border-primary"
        placeholder="Search for Products, Brands and More"
      />
      <button
        type="submit"
        className="text-[0.8rem] sm:text-base bg-primary border border-primary text-white px-4 sm:px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
