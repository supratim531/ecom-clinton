import React, { useState } from "react";

const FilterSection = ({ label, options, expanded = false }) => {
  const [isSectionOpened, setIsSectionOpened] = useState(expanded);

  const handleOpenClose = () => {
    setIsSectionOpened((prev) => !prev);
  };

  return (
    <section className="flex flex-col">
      <h3
        onClick={handleOpenClose}
        className="cursor-pointer p-5 uppercase text-sm font-medium flex justify-between items-center text-slate-800"
      >
        <span>{label}</span>
        {isSectionOpened ? (
          <i className="fa-solid fa-angle-up text-slate-400"></i>
        ) : (
          <i className="fa-solid fa-angle-down text-slate-400"></i>
        )}
      </h3>
      {isSectionOpened && (
        <div className="px-5 pb-5">
          <ul className="flex flex-col gap-2">
            {options.map((option, index) => (
              <li key={index} className="flex items-center gap-2.5">
                <input
                  id={`${label}-${index}`}
                  type="checkbox"
                  className="cursor-pointer rounded-sm py-[7px] focus:ring-0 text-primary"
                />
                <label htmlFor={`${label}-${index}`} className="cursor-pointer">
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default FilterSection;
