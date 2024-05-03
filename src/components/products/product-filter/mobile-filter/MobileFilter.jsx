import React, { useEffect, useState } from "react";
import { products } from "../../../home/Home";

const MobileFilter = ({ filterSections, handleMobileFilter }) => {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    setCurrentSection(filterSections[0]);
  }, []);

  return (
    <section className="font-roboto h-full flex flex-col justify-between text-sm xs:text-base">
      <section className="px-4 py-3 text-[0.8rem] xs:text-sm flex justify-between items-center">
        <button
          onClick={handleMobileFilter}
          className="flex items-center gap-2"
        >
          <i className="fa-solid fa-arrow-left-long"></i>
          <span>Filters</span>
        </button>
        {false && <button className="">Clear Filters</button>}
      </section>
      <section className="flex flex-grow">
        <aside className="w-[40%] sm:w-[35%] text-secondary bg-gray-200">
          <ul className="w-full capitalize flex flex-col">
            {currentSection &&
              filterSections.map((filterSection, index) => (
                <li
                  key={index}
                  onClick={() => setCurrentSection(filterSection)}
                  className={
                    filterSection.label === currentSection?.label
                      ? "cursor-pointer px-4 py-3 hover:bg-white text-primary bg-white"
                      : "cursor-pointer px-4 py-3 hover:bg-white hover:text-primary"
                  }
                >
                  {filterSection.label}
                </li>
              ))}
          </ul>
        </aside>
        <section className="px-4 py-3 flex-grow text-secondary text-[0.9rem]">
          <ul className="flex flex-col gap-2">
            {currentSection &&
              currentSection?.options.map((option, index) => (
                <li key={index} className="flex items-center gap-4">
                  <input
                    id={`${currentSection.label}-${index}`}
                    type="checkbox"
                    className="cursor-pointer rounded-sm py-[7px] focus:ring-0 text-primary"
                  />
                  <label
                    htmlFor={`${currentSection.label}-${index}`}
                    className="cursor-pointer"
                  >
                    {option}
                  </label>
                </li>
              ))}
          </ul>
        </section>
      </section>
      <section className="p-2 flex justify-end items-center text-sm xs:text-base">
        <div className="flex flex-col leading-4">
          <strong>{products.length}</strong>
          <span className="text-[0.7rem] xs:text-sm">products found</span>
        </div>
        <button className="ml-auto px-8 xs:px-[3.5rem] py-1.5 rounded-sm bg-primary text-white">
          Apply
        </button>
      </section>
    </section>
  );
};

export default MobileFilter;
