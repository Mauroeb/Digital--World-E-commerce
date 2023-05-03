import React, { useContext, useEffect } from "react";
import Product from "../Components/Product";
import { ProductContext } from "../Contexts/ProductContext";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className="">
        <div className="mb-36 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
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
