import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { products } = useContext(ProductContext);
  const { id, image, name, description, price } = product;

  return (
    <div className="bg-gray-300 border border-[#e4e4e4]">
      <div
        className="flex justify-center items-center 
        overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] flex mx-auto justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
      </div>
      {/* name , description , price and button */}
      <div>
        <div>
          <div className="capitalize text-sm text-gray-500 "></div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{product.name}</h2>
          </Link>
          <div className="font-bold">$ {product.price}</div>
        </div>
      </div>
      {/* buttons */}
      <div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold
         py-2 px-4 border-b-4 border-blue-700
         hover:border-blue-500 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
