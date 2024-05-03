import React from "react";
import FilterSection from "./FilterSection";

const DesktopFilter = ({ filterSections }) => {
  return (
    <section aria-label="Filter products" className="min-w-[280px]">
      <div className="font-roboto divide-y divide-gray-200">
        <div className="px-5 py-4 flex justify-between items-center">
          <h2 className="text-[1.3rem] font-medium text-secondary">Filters</h2>
          {false && (
            <button className="uppercase text-[0.9rem] font-medium text-blue-500">
              Clear All
            </button>
          )}
        </div>
        {filterSections.map((filterSection, index) => (
          <FilterSection
            key={index}
            label={filterSection.label}
            options={filterSection.options}
            expanded={["price", "categories"].includes(filterSection.label)}
          />
        ))}
      </div>
    </section>
  );
};

export default DesktopFilter;
