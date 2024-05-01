import React, { useEffect, useState } from "react";

const MobileFilter = ({ handleMobileFilter }) => {
  const [currentSection, setCurrentSection] = useState(null);

  const filterSections = [
    {
      name: "categories",
      options: ["Sports", "Watch", "Mobile", "Headphone", "Computer"],
    },
    {
      name: "brands",
      options: ["Apple", "boAt", "SAMSUNG", "Noise", "Keplar", "Jupiter"],
    },
    {
      name: "price",
      options: [
        "₹10000 and below",
        "₹10000 to ₹15000",
        "₹15000 to ₹25000",
        "₹25000 and above",
      ],
    },
  ];

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
      <div className="flex flex-grow">
        <aside className="w-[40%] sm:w-[35%] text-secondary bg-gray-200">
          <ul className="w-full capitalize flex flex-col">
            {currentSection &&
              filterSections.map((filterSection, index) => (
                <li
                  onClick={() => setCurrentSection(filterSection)}
                  key={index}
                  className={
                    filterSection.name === currentSection?.name
                      ? "cursor-pointer px-4 py-3 hover:bg-white text-primary bg-white"
                      : "cursor-pointer px-4 py-3 hover:bg-white hover:text-primary"
                  }
                >
                  {filterSection.name}
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
                    id={option}
                    name={option}
                    type="checkbox"
                    className="cursor-pointer rounded-sm py-[7px] focus:ring-0 text-primary"
                  />
                  <label htmlFor={option} className="cursor-pointer">
                    {option}
                  </label>
                </li>
              ))}
          </ul>
        </section>
      </div>
      <div className="p-2 flex justify-end items-center text-sm xs:text-base">
        <div className="flex flex-col leading-4">
          <strong>90,876</strong>
          <span className="text-[0.7rem] xs:text-sm">products found</span>
        </div>
        <button className="ml-auto px-8 xs:px-[3.5rem] py-1.5 rounded-sm bg-primary text-white">
          Apply
        </button>
      </div>
    </section>
  );
};

export default MobileFilter;
