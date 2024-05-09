import React from "react";
import { useNavigate } from "react-router-dom";
import { banner } from "../../assets";

const Banner = () => {
  const navigate = useNavigate();

  return (
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
          onClick={() => navigate("/products")}
          className="text-[0.8rem] sm:text-base px-6 py-3 font-medium rounded transition border border-primary hover:text-primary hover:bg-transparent text-white bg-primary"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
