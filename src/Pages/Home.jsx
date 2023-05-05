import React, { useContext, useEffect } from "react";
import Product from "../Components/Product";
import { ProductContext } from "../Contexts/ProductContext";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className="">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-24 md:grid-cols-2 xl:mx-0 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0">
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
