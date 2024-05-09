import React, { useEffect, useRef, useState } from "react";
import { products } from "../pages/Home";
import CardsContainer from "../components/shared/CardsContainer";
import ProductList from "../components/product-list/ProductList";
import MobileFilter from "../components/product-filter/mobile-filter/MobileFilter";
import DesktopFilter from "../components/product-filter/desktop-filter/DesktopFilter";

const filterSections = [
  {
    label: "categories",
    options: ["Sports", "Watch", "Mobile", "Headphone", "Computer"],
  },
  {
    label: "brands",
    options: ["Apple", "boAt", "SAMSUNG", "Noise", "Keplar", "Jupiter"],
  },
  {
    label: "price",
    options: [
      "₹10000 and below",
      "₹10000 to ₹15000",
      "₹15000 to ₹25000",
      "₹25000 and above",
    ],
  },
];

const Products = () => {
  const filterRef = useRef();
  const filterButtonRef = useRef();
  const [fixedFilterButton, setfixedFilterButton] = useState(false);

  const handleMobileFilter = () => {
    filterRef.current.classList.toggle("translate-x-[-100%]");
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry.target);
        // console.log(entry.isIntersecting);

        if (window.innerWidth < 900) {
          setfixedFilterButton(!entry.isIntersecting);
        }
      });
    });

    observer.observe(filterButtonRef.current);
  }, []);

  return (
    <section className="flex p-3 pb-[2rem] gap-3 bg-[#f0f5ff]">
      {fixedFilterButton && (
        <section className="p-2 fixed bottom-0 left-0 z-[2] w-full flex justify-start bg-white">
          <button
            onClick={handleMobileFilter}
            className="min-[900px]:hidden px-2 py-1 flex items-center gap-2 font-medium rounded-sm text-secondary bg-slate-200 hover:bg-slate-300"
          >
            <i className="fa-solid fa-filter text-sm"></i>
            <span>Filter</span>
          </button>
        </section>
      )}

      <section
        ref={filterRef}
        className="min-[900px]:hidden fixed top-0 left-0 z-[3] w-full h-[100vh] duration-300 translate-x-[-100%] bg-white"
      >
        {window.innerWidth < 900 && (
          <MobileFilter
            filterSections={filterSections}
            handleMobileFilter={handleMobileFilter}
          />
        )}
      </section>
      <section className="hidden min-[900px]:flex max-w-[300px] self-start rounded-sm shadow shadow-slate-300 bg-white">
        {window.innerWidth >= 900 && (
          <DesktopFilter filterSections={filterSections} />
        )}
      </section>
      <section className="w-full rounded-sm shadow shadow-slate-300 bg-white">
        <section className="font-roboto p-[10px] lg:p-[1rem] flex flex-col items-start gap-2">
          <button
            ref={filterButtonRef}
            onClick={handleMobileFilter}
            className="min-[900px]:hidden px-2 py-1 flex items-center gap-2 font-medium rounded-sm text-secondary bg-slate-200 hover:bg-slate-300"
          >
            <i className="fa-solid fa-filter text-sm"></i>
            <span>Filter</span>
          </button>
          <div>
            <select
              id="sortby"
              name="sortby"
              className="w-44 text-sm py-3 px-4 shadow-sm rounded border-gray-300 focus:ring-0 focus:ring-primary focus:border-primary text-secondary"
            >
              <option value="">Sort</option>
              <option value="price-low-to-high">Price low to high</option>
              <option value="price-high-to-low">Price high to low</option>
              <option value="latest">Latest product</option>
            </select>
          </div>
        </section>
        <CardsContainer className="my-[1rem]">
          <ProductList
            ariaLabel={"View all products"}
            label={"All Products"}
            products={products}
          />
        </CardsContainer>
      </section>
    </section>
  );
};

export default Products;
