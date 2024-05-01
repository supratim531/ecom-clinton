import React from "react";
import { products } from "../home";
import ProductList from "../product-list";
import DesktopFilter from "../product-filter/desktop-filter";

const Products = () => {
  return (
    // bg-[#f1f3f6]
    <section className="flex p-3 gap-3 bg-[#f1f3f6]">
      <section className="max-w-[300px] self-start flex rounded-sm shadow shadow-slate-300 bg-white">
        <DesktopFilter />
      </section>
      <section className="pb-4 rounded-sm bg-white">
        <div className="flex items-center mb-4">
          <select
            name="sortby"
            id="sortby"
            className="w-44 text-sm py-3 px-4 shadow-sm rounded border-gray-300 focus:ring-primary focus:border-primary text-gray-800"
          >
            <option value="">Default sorting</option>
            <option value="price-low-to-high">Price low to high</option>
            <option value="price-high-to-low">Price high to low</option>
            <option value="latest">Latest product</option>
          </select>
        </div>
        <ProductList
          ariaLabel={"View all products"}
          label={"All Products"}
          products={products}
        />
      </section>
    </section>
  );
};

export default Products;
