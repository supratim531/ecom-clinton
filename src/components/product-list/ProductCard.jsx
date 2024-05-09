import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "../shared/Tooltip";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group font-roboto overflow-hidden rounded-sm duration-100 hover:shadow-[0_2px_20px_0_#1f293740] bg-white">
      <div className="relative">
        <img
          src={product.image}
          alt={product.product_name}
          className="w-full"
          width={1080}
          height={800}
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition bg-black bg-opacity-60">
          <Tooltip
            text={"View"}
            // className="[&>span]:!bg-secondary [&>span]:after:!border-t-secondary"
          >
            <button
              role="link"
              tabIndex={0}
              onClick={() => navigate("/login")}
              aria-label={`View ${product.product_name}`}
              className="text-white text-lg w-9 h-9 rounded-full flex items-center justify-center transition hover:bg-gray-800 bg-primary"
            >
              <i className="fa-solid fa-eye"></i>
            </button>
          </Tooltip>
          <Tooltip
            text={"Add to cart"}
            // className="[&>span]:!bg-secondary [&>span]:after:!border-t-secondary"
          >
            <button
              role="link"
              tabIndex={0}
              onClick={() => navigate("/login")}
              aria-label={`Add ${product.product_name} to cart`}
              className="text-white text-lg w-9 h-9 rounded-full flex items-center justify-center transition hover:bg-gray-800 bg-primary"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <section
          aria-label={`Click to ${product.product_name} to explore this on another page`}
          className="flex flex-col items-start"
        >
          <h3 className="inline-block font-semibold text-gray-400">
            {product.product_brand}
          </h3>
          <h4 className="inline-block mb-2 text-[14px] font-medium text-gray-700">
            <Link to={"/product"} className="hover:text-primary">
              {product.product_name}
            </Link>
          </h4>
        </section>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="font-medium text-primary">
            ₹
            {
              +(
                product.product_price -
                product.product_price * (product.product_discount / 100)
              ).toFixed(0)
            }
          </p>
          <p className="line-through text-[14px] text-gray-400">
            ₹{product.product_price}
          </p>
          <p className="font-medium text-[13px] text-[#26a541]">
            {product.product_discount}% off
          </p>
        </div>
      </div>
      <button
        tabIndex={0}
        onClick={() => navigate("/login")}
        aria-label={`Press to place an order for ${product.product_name}`}
        className="block invisible group-hover:visible w-full py-2 transition text-center hover:text-primary hover:bg-transparent text-white bg-primary"
      >
        Place Order
      </button>
    </div>
  );
};

export default ProductCard;
