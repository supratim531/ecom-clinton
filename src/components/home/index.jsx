import "./index.css";
import React from "react";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import banner from "../../assets/img/banner-bg.jpg";
import deliveryVan from "../../assets/img/icons/delivery-van.svg";
import moneyBack from "../../assets/img/icons/money-back.svg";
import serviceHours from "../../assets/img/icons/service-hours.svg";
import category1 from "../../assets/img/category/category-1.jpg";
import category2 from "../../assets/img/category/category-2.jpg";
import category3 from "../../assets/img/category/category-3.jpg";
import category4 from "../../assets/img/category/category-4.jpg";
import category5 from "../../assets/img/category/category-5.jpg";
import category6 from "../../assets/img/category/category-6.jpg";
import { Link } from "react-router-dom";

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
        className="container mx-auto my-16"
      >
        <section className="services">
          <section className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
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
          <section className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
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
          <section className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
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
        className="categories-container container mx-auto my-16"
      >
        <h2 className="mb-4 uppercase font-medium text-2xl text-secondary">
          Shop By Category
        </h2>
        <section
          aria-label="Available categories to shop"
          className="categories"
        >
          {categories.map((category) => (
            <ul>
              <li className="relative rounded-sm overflow-hidden group">
                <img
                  src={category.image}
                  alt={`${category.name}`}
                  className="w-full"
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
                  className="absolute font-roboto font-medium inset-0 lg:opacity-0 transition-all flex items-center justify-center text-xl hover:opacity-100 text-white bg-[#00000060]"
                >
                  {category.name}
                </Link>
              </li>
            </ul>
          ))}
        </section>
      </section>

      {/* <h2>Home</h2>
      <p>This is Home Page.</p>
      <button
        tabIndex={0}
        aria-label="Get new access token"
        onClick={getNewAccessToken}
        className="my-2 px-2 outline outline-1 bg-gray-200"
      >
        Refresh Token
      </button> */}
    </section>
  );
};

export default Home;
