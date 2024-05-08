import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "../shared/Tooltip";

const ProductCard = ({ product }) => {
  return (
    <div className="group font-roboto overflow-hidden rounded-sm transition hover:shadow-[0_2px_5px_0_#1f293790] bg-white">
      <div className="relative">
        <img
          src={product.image}
          alt={product.product_name}
          className="w-full"
          width={1080}
          height={800}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <Tooltip
            text={`View ${product.product_name}`}
            className="[&>span]:!bg-secondary [&>span]:after:!border-t-secondary"
          >
            <Link
              tabIndex={0}
              aria-label={`View ${product.product_name}`}
              role="button"
              to={"/product"}
              className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i className="fa-solid fa-eye"></i>
            </Link>
          </Tooltip>
          <Tooltip
            text={`Add ${product.product_name} to cart`}
            className="[&>span]:!bg-secondary [&>span]:after:!border-t-secondary"
          >
            <Link
              tabIndex={0}
              aria-label={`Add ${product.product_name} to cart`}
              role="button"
              to={"/login"}
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <section
          aria-label={`Click to ${product.product_name} to explore this on another page`}
          className="flex flex-col items-start"
        >
          <h3 className="inline-block uppercase font-bold text-lg text-gray-400">
            {product.product_brand}
          </h3>
          <Link to={"/product"}>
            <h4 className="inline-block mb-2 text-[1rem] font-medium text-gray-700 hover:text-primary transition">
              {product.product_name}
            </h4>
          </Link>
        </section>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-lg text-primary font-semibold">
            ₹
            {
              +(
                product.product_price -
                product.product_price * (product.product_discount / 100)
              ).toFixed(0)
            }
          </p>
          <p className="text-gray-400 line-through">₹{product.product_price}</p>
          <p className="font-semibold text-[#26a541]">
            {product.product_discount}% off
          </p>
        </div>
      </div>
      <Link
        to={"/login"}
        tabIndex={0}
        role="button"
        aria-label={`Press to place an order for ${product.product_name}`}
        className="block w-full py-2 text-center text-lg text-white bg-primary border border-primary rounded-b-sm hover:bg-transparent hover:text-primary transition"
      >
        Place Order
      </Link>
    </div>
  );
};

export default ProductCard;
