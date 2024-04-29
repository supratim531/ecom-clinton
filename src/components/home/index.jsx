import "./index.css";
import React from "react";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import banner from "../../assets/img/banner-bg.jpg";
import deliveryVan from "../../assets/svg/delivery-van.svg";
import moneyBack from "../../assets/svg/money-back.svg";
import serviceHours from "../../assets/svg/service-hours.svg";

import category1 from "../../assets/img/category/category-1.jpg";
import category2 from "../../assets/img/category/category-2.jpg";
import category3 from "../../assets/img/category/category-3.jpg";
import category4 from "../../assets/img/category/category-4.jpg";
import category5 from "../../assets/img/category/category-5.jpg";
import category6 from "../../assets/img/category/category-6.jpg";

import product1 from "../../assets/img/products/product1.jpg";
import product2 from "../../assets/img/products/product2.jpg";
import product3 from "../../assets/img/products/product3.jpg";
import product4 from "../../assets/img/products/product4.jpg";
import product5 from "../../assets/img/products/product5.jpg";
import product6 from "../../assets/img/products/product6.jpg";

import { Link } from "react-router-dom";
import ProductList from "../product-list";

export const products = [
  {
    product_brand: "Brand-A",
    product_name: "Product 1",
    product_price: 899,
    product_discount: 12,
    image: product1,
  },
  {
    product_brand: "Brand-C",
    product_name: "Product 2",
    product_price: 2500,
    product_discount: 11,
    image: product2,
  },
  {
    product_brand: "Brand-X",
    product_name: "Product 3",
    product_price: 1299,
    product_discount: 4,
    image: product3,
  },
  {
    product_brand: "Brand-X",
    product_name: "Product 4",
    product_price: 1199,
    product_discount: 4,
    image: product4,
  },
  {
    product_brand: "Brand-C",
    product_name: "Product 5",
    product_price: 3999,
    product_discount: 45,
    image: product5,
  },
  {
    product_brand: "Brand-A",
    product_name: "Product 6",
    product_price: 179,
    product_discount: 0,
    image: product6,
  },
];

export const productImages = {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
};

const Home = () => {
  const getNewAccessToken = useRefreshToken();

  const categories = [
    {
      name: "Bedroom",
      image: category1,
    },
    {
      name: "Mattrass",
      image: category2,
    },
    {
      name: "Outdoor",
      image: category3,
    },
    {
      name: "Sofa",
      image: category4,
    },
    {
      name: "Living Room",
      image: category5,
    },
    {
      name: "Kitchen",
      image: category6,
    },
  ];

  return (
    <section>
      <section
        role="banner"
        className="banner-container h-[400px] lg:h-[600px]"
        style={{
          background: `no-repeat center url(${banner})`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full px-2 min-[400px]:px-4 lg:px-16 min-[400px]:w-[90%] sm:w-[80%] lg:w-[60%] min-[1348px]:w-[50%] flex flex-col justify-center items-start gap-4">
          <h1 className="capitalize text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-medium text-secondary">
            Best collection for home decoration
          </h1>
          <p className="text-[0.75rem] min-[400px]:text-[0.85rem] sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
          <button
            tabIndex={0}
            aria-label="Shop now"
            className="text-[0.8rem] sm:text-base px-6 py-3 font-medium rounded transition border border-primary hover:text-primary hover:bg-transparent text-white bg-primary"
          >
            Shop Now
          </button>
        </div>
      </section>

      <section
        aria-label="Provided services"
        className="services-container px-[1rem] xs:container xs:mx-auto my-16"
      >
        <section className="services [&_p]:text-nowrap">
          <section className="border border-primary rounded-sm px-3 py-6 flex flex-row-reverse justify-between sm:justify-center items-center gap-5 sm:gap-10">
            <img
              src={deliveryVan}
              alt="Delivery Van"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </section>
          <section className="border border-primary rounded-sm px-3 py-6 flex flex-row-reverse justify-between sm:justify-center items-center gap-5 sm:gap-10">
            <img
              src={moneyBack}
              alt="Money Back Guarantee"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
              <p className="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </section>
          <section className="border border-primary rounded-sm px-3 py-6 flex flex-row-reverse justify-between sm:justify-center items-center gap-5 sm:gap-10">
            <img
              src={serviceHours}
              alt="Service Hours"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </section>
        </section>
      </section>

      <section
        aria-label="Shopping by category"
        className="categories-container px-[10px] sm:px-[1rem] sm:container sm:mx-auto my-16"
      >
        <h2 className="mb-4 uppercase font-bold xs:font-medium text-center min-[480px]:text-start text-sm xs:text-lg min-[480px]:text-2xl text-secondary">
          Shop By Category
        </h2>
        <ul
          role="menu"
          aria-label="Available categories to shop"
          className="categories"
        >
          {categories.map((category, index) => (
            <li
              key={index}
              className="relative rounded-sm overflow-hidden group"
            >
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
            </li>
          ))}
        </ul>
      </section>

      <ProductList
        label={"Available Products"}
        ariaLabel={"View available products"}
        products={products}
      />
    </section>
  );
};

export default Home;
