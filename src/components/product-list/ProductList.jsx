import "./ProductList.css";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ label, products, ariaLabel }) => {
  return (
    <section aria-label={ariaLabel} className="product-list-container">
      <h2 className="mb-4 uppercase font-bold xs:font-medium text-start text-sm xs:text-lg min-[480px]:text-2xl text-secondary">
        {label}
      </h2>
      <ul
        role="menu"
        aria-label="Explore product list to shop"
        className="product-list gap-[0.5rem]"
      >
        {products.map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
