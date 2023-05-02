import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full p-2 hover:drop-shadow-2xl bg-zinc-800 rounded-lg  shadow-lg">
      <div
        className="flex justify-center items-center 
        overflow-hidden group transition container mx-auto"
      >
        <div className="w-full flex justify-center items-center">
          {/* image */}
          <div className="w-full h-64 object-cover p-6 flex mx-auto justify-center items-center bg-violet-300 rounded-lg">
            <img
              className="group-hover:scale-110 transition duration-300"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
      </div>
      {/* name , description , price */}
      <div className="mt-3 flex flex-col mx-2">
        <Link to={`/product/${product.id}`}>
          <h2 className="font-semibold mb-1 text-xl text-teal-500">
            {product.name}
          </h2>
        </Link>
        <div className="mt-1 text-violet-300">{product.description}</div>
      </div>

      {/* buttons */}
      <div>
        <div className="flex justify-between items-center">
          <div className="font-bold text-white text-2xl bottom-5">
            $ {product.price}
          </div>
          <button
            className="bg-zinc-950 text-violet-500 hover:bg-violet-500 hover:text-zinc-950 font-bold
         p-2 px-4  flex items-center justify-center rounded-xl"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
