import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={category.image}
        alt={`${category.name}`}
        className="w-full"
        loading="lazy"
      />
      <Link
        to="/login"
        tabIndex={0}
        aria-label={`Search for ${category.name}`}
        role="button"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.5)",
        }}
        className="absolute font-roboto font-medium inset-0 lg:opacity-0 transition-all flex items-center justify-center text-lg xs:text-sm min-[400px]:text-xl hover:opacity-100 text-white bg-[#00000060]"
      >
        {category.name}
      </Link>
    </div>
  );
};

export default CategoryCard;
