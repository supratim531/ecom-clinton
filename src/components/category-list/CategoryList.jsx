import "./CategoryList.css";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ label, categories, ariaLabel }) => {
  return (
    <section aria-label={ariaLabel} className="category-list-container">
      <h2 className="mb-4 uppercase font-bold xs:font-medium text-start text-sm xs:text-lg min-[480px]:text-2xl text-secondary">
        {label}
      </h2>
      <ul
        role="menu"
        aria-label="Available categories to shop"
        className="category-list"
      >
        {categories.map((category, index) => (
          <li key={index}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
