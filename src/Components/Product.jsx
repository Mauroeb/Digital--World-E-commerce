import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { products } = useContext(ProductContext);
  const { id, image, name, description, price } = product;

  return (
    <div className="w-full p-3 bg-white rounded-lg relative shadow-lg">
      <div
        className="flex justify-center items-center 
        overflow-hidden group transition container mx-auto"
      >
        <div className="w-full flex justify-center items-center">
          {/* image */}
          <div className="w-full h-64 object-cover p-8 flex mx-auto justify-center items-center bg-zinc-200 rounded-lg">
            <img
              className="group-hover:scale-110 transition duration-300"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
      </div>
      {/* name , description , price */}
      <div className="mt-3 flex flex-col">
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 text-xl">{product.name}</h2>
        </Link>
        <div className="mt-1 text-slate-400">{product.description}</div>
        <div className="font-bold mt-8 text-2xl">$ {product.price}</div>
      </div>

      {/* buttons */}
      <div>
        <div className="">
          <button
            className="bg-zinc-800 hover:bg-zinc-950 text-white font-bold
         p-2 px-4 bottom-3 right-3 flex items-center justify-center absolute rounded-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
