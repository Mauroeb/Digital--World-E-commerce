import React, { useContext } from "react";
import Product from "../Components/Product";
import { ProductContext } from "../Contexts/ProductContext";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className="py-16 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
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
