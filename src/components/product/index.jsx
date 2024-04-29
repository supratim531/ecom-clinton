import React from "react";
import ProductList from "../product-list";
import { products, productImages } from "../home";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="flex flex-col">
      {/* product-detail */}
      <section className="py-[2rem] shadow-[inset_0px_-0.5px_10px_#afafaf] bg-white">
        <section className="px-[10px] sm:px-[1rem] flex flex-col gap-8 lg:flex-row lg:gap-0">
          <section
            aria-label="Product image section with shopping buttons"
            className="lg:sticky lg:top-0 lg:h-[100vh] lg:min-w-[50%] lg:flex lg:flex-col bg-white"
          >
            <section className="flex-grow rounded-sm border border-slate-200">
              <img
                src={productImages.product1}
                alt="product"
                className="w-full h-full object-contain"
              />
            </section>
            <section className="hidden font-roboto font-medium py-4 lg:flex gap-4 text-lg bg-white">
              <Link
                role="button"
                aria-label="Add this to cart"
                className="w-[50%] uppercase py-4 flex justify-center items-center gap-2 font-medium rounded transition hover:bg-transparent hover:text-primary bg-primary border border-primary text-white"
              >
                <i className="fa-solid fa-cart-shopping" />
                <span>Add to cart</span>
              </Link>
              <Link
                role="button"
                aria-label="Buy this right now"
                className="w-[50%] py-4 uppercase flex justify-center items-center gap-2 font-medium rounded transition border border-secondary text-secondary hover:text-primary hover:border-primary"
              >
                <i className="fa-solid fa-bolt" />
                <span>Buy Now</span>
              </Link>
            </section>
          </section>
          <section
            aria-label="All information about this"
            className="px-0 lg:p-4 flex flex-col gap-4 bg-white"
          >
            <section>
              <h2 className="mb-2 uppercase text-3xl lg:text-4xl font-medium [text-shadow:1px_1px_2px_black]">
                {"Boult Astra 350x"}
              </h2>
              <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                  <span>Availability: </span>
                  <span className="text-green-600">In Stock</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Brand: </span>
                  <span className="text-gray-600">Apex</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">
                    Category:{" "}
                  </span>
                  <span className="text-gray-600">Sofa</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">SKU: </span>
                  <span className="text-gray-600">BE45VGRT</span>
                </p>
              </div>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-base text-gray-400 line-through">$55.00</p>
              </div>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                eius eum reprehenderit dolore vel mollitia optio consequatur hic
                asperiores inventore suscipit, velit consequuntur, voluptate
                doloremque iure necessitatibus adipisci magnam porro.
              </p>
              <div className="pt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
                <div className="flex items-center gap-2">
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-xs"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-xs"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      XS
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-sm"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-sm"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      S
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-m"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-m"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      M
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-l"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-l"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      L
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-xl"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-xl"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                  Color
                </h3>
                <div className="flex items-center gap-2">
                  <div className="color-selector">
                    <input
                      type="radio"
                      name="color"
                      id="red"
                      className="hidden"
                    />
                    <label
                      htmlFor="red"
                      className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "#fc3d57" }}
                    />
                  </div>
                  <div className="color-selector">
                    <input
                      type="radio"
                      name="color"
                      id="black"
                      className="hidden"
                    />
                    <label
                      htmlFor="black"
                      className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "#000" }}
                    />
                  </div>
                  <div className="color-selector">
                    <input
                      type="radio"
                      name="color"
                      id="white"
                      className="hidden"
                    />
                    <label
                      htmlFor="white"
                      className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "#fff" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">
                  Quantity
                </h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                  <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                    -
                  </div>
                  <div className="h-8 w-8 text-base flex items-center justify-center">
                    4
                  </div>
                  <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                    +
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Link className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
                <Link className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <i className="fa-brands fa-twitter" />
                </Link>
                <Link className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </div>
            </section>
            <section>
              <h3 className="font-roboto font-medium text-lg text-secondary">
                Product details
              </h3>
              <div className="w-full h-[0.5px] my-4 bg-slate-200"></div>
              <div>
                <div className="text-gray-600">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur necessitatibus deleniti natus dolore cum maiores
                    suscipit optio itaque voluptatibus veritatis tempora iste
                    facilis non aut sapiente dolor quisquam, ex ab.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, quae accusantium voluptatem blanditiis sapiente
                    voluptatum. Autem ab, dolorum assumenda earum veniam eius
                    illo fugiat possimus illum dolor totam, ducimus excepturi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quia modi ut expedita! Iure molestiae labore cumque
                    nobis quasi fuga, quibusdam rem? Temporibus consectetur
                    corrupti rerum veritatis numquam labore amet.
                  </p>
                </div>
                <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                  <tbody>
                    <tr>
                      <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                        Color
                      </th>
                      <th className="py-2 px-4 border border-gray-300 ">
                        Blank, Brown, Red
                      </th>
                    </tr>
                    <tr>
                      <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                        Material
                      </th>
                      <th className="py-2 px-4 border border-gray-300 ">
                        Latex
                      </th>
                    </tr>
                    <tr>
                      <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                        Weight
                      </th>
                      <th className="py-2 px-4 border border-gray-300 ">
                        55kg
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        </section>
      </section>
      {/* product-detail */}

      {/* related products */}
      <section>
        <ProductList
          ariaLabel={"View related products"}
          label={"Related Products"}
          products={products}
        />
      </section>
      {/* related products */}

      {/* floating buttons for small devices */}
      <section className="lg:hidden text-[0.75rem] xs:text-sm min-[400px]:text-base w-full fixed bottom-0 font-roboto font-medium flex bg-white">
        <Link
          role="button"
          aria-label="Add this to cart"
          className="w-[50%] uppercase py-4 flex justify-center items-center gap-2 font-medium transition hover:bg-transparent hover:text-primary bg-primary border border-primary text-white"
        >
          <i className="fa-solid fa-cart-shopping" />
          <span>Add to cart</span>
        </Link>
        <Link
          role="button"
          aria-label="Buy this right now"
          className="w-[50%] py-4 uppercase flex justify-center items-center gap-2 font-medium transition border text-secondary hover:text-primary"
        >
          <i className="fa-solid fa-bolt" />
          <span>Buy Now</span>
        </Link>
      </section>
      {/* floating buttons for small devices */}
    </section>
  );
};

export default Product;
