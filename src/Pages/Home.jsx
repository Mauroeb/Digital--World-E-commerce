import React, { useContext, useEffect } from "react";
import Product from "../Components/Product";
import { ProductContext } from "../Contexts/ProductContext";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  return (
    <div>

      <h1 className="text-[1.7rem] md:text-[2.3rem] lg:text-[2.5rem] xl:text-[2.7rem] 2xl:text-[3rem] text-white ms-[4rem] text-Roboto">Here´s the best offers <span className="text-first_color">for You</span> </h1>

      <section className="w-full">
        <div className="container mx-auto">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products.map((products) => (
              <Product product={products} key={products.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
