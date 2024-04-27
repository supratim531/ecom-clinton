import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePrivateAxios } from "../hooks/usePrivateAxios";
import { CanceledError } from "axios";
import { useAbortController } from "../hooks/useAbortController";

/**
 * @author Supratim Majumder
 * @description This component renders all products and uses a custom react hook @function useAbortController
 */
const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const privateAxios = usePrivateAxios();
  const controller = useAbortController();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      const res = await privateAxios.get("/product/?page-size=1&page=1", {
        signal: controller.signal,
      });
      console.log({ res });
      const { data } = res;
      console.log({ data });
      setProducts(data?.product);
    } catch (err) {
      if (err instanceof CanceledError) {
        console.log({ err });
        console.log("CanceledError:", location, location.state);
      } else {
        console.log({ err });
        navigate("/login", { state: { from: location }, replace: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();

    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <h2>All Products</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Here you can find all products (total items: {products.length}).</p>
      )}
    </section>
  );
};

export default Products;
