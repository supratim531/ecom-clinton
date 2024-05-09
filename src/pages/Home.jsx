import React from "react";
import Banner from "../components/banner/Banner";
import CardsContainer from "../components/shared/CardsContainer";
import ServiceList from "../components/service-list/ServiceList";
import ProductList from "../components/product-list/ProductList";
import CategoryList from "../components/category-list/CategoryList";
import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "../assets";

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

export const products = [
  {
    product_brand: "Indian Bharat",
    product_name: "Bharat Lifestyle Deno Fabric 3 Seater Sofa",
    product_price: 899,
    product_discount: 12,
    image: product1,
  },
  {
    product_brand: "Alpana Furniture",
    product_name: "BRIGHTWOOD Solid Sheesham Wood Three Seater Sofa",
    product_price: 2500,
    product_discount: 11,
    image: product2,
  },
  {
    product_brand: "Woodland",
    product_name: "LIVEWELL Premium Quality Jute Fabric 3 Seater Sofa",
    product_price: 1299,
    product_discount: 4,
    image: product3,
  },
  {
    product_brand: "Indian Bharat",
    product_name: "Divine Arts Solid Sheesham Wood 5 Seater Sofa",
    product_price: 1199,
    product_discount: 4,
    image: product4,
  },
  {
    product_brand: "Kakoli Furniture",
    product_name: "Artesia 3 Seater Sectional Leatherette Sofa",
    product_price: 3999,
    product_discount: 45,
    image: product5,
  },
  {
    product_brand: "Woodland",
    product_name: "CARLTON LONDON Olivia LHS Fabric 6 Seater Sofa",
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
  return (
    <section>
      <Banner />

      <CardsContainer>
        <ServiceList ariaLabel={"Provided services"} />
      </CardsContainer>

      <CardsContainer>
        <CategoryList
          categories={categories}
          label={"Available Categories"}
          ariaLabel={"Shopping by category"}
        />
      </CardsContainer>

      <CardsContainer>
        <ProductList
          products={products}
          label={"Available Products"}
          ariaLabel={"View available products"}
        />
      </CardsContainer>
    </section>
  );
};

export default Home;
