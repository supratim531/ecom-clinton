import React from "react";
import FilterSection from "./FilterSection";

const DesktopFilter = () => {
  const categories = ["Sports", "Watch", "Mobile", "Headphone", "Computer"];
  const brands = ["Apple", "boAt", "SAMSUNG", "Noise", "Keplar", "Jupiter"];
  const prices = ["< ₹10000", "₹10000 - ₹15000", "₹15000 - ₹25000", "₹25000 >"];

  return (
    <section aria-label="Filter products" className="min-w-[280px]">
      <div className="font-roboto divide-y divide-gray-200">
        <h2 className="px-5 py-4 text-[1.3rem] font-medium text-secondary">
          Filters
        </h2>
        <FilterSection label={"Categories"} options={categories} />
        <FilterSection label={"Brands"} options={brands} />
        <FilterSection label={"Prices"} options={prices} expanded />
      </div>
    </section>
  );
};

export default DesktopFilter;
