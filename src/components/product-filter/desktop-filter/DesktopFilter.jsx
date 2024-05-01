import React from "react";
import FilterSection from "./FilterSection";

const DesktopFilter = () => {
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

  return (
    <section aria-label="Filter products" className="min-w-[280px]">
      <div className="font-roboto divide-y divide-gray-200">
        <h2 className="px-5 py-4 text-[1.3rem] font-medium text-secondary">
          Filters
        </h2>
        {filterSections.map((filterSection, index) =>
          filterSection.name !== "price" ? (
            <FilterSection
              key={index}
              label={filterSection.name}
              options={filterSection.options}
            />
          ) : (
            <FilterSection
              key={index}
              label={filterSection.name}
              options={filterSection.options}
              expanded
            />
          )
        )}
      </div>
    </section>
  );
};

export default DesktopFilter;
