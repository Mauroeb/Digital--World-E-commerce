import React, { useContext } from "react";
import { CartContext } from '../Contexts/CartContext';
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const { addToCart} = useContext(CartContext);

  return (
    <div className="w-full p-2 hover:drop-shadow-2xl bg-white rounded-lg relative shadow-lg">
      <div
        className="flex justify-center items-center 
        overflow-hidden group transition container mx-auto"
      >
        <div className="w-full flex justify-center items-center">
          {/* image */}
          <div className="w-full h-64 object-cover p-6 flex mx-auto justify-center items-center bg-zinc-200 rounded-lg">
            <img
              className="group-hover:scale-110 transition duration-300"
              src={products.image}
              alt={products.name}
            />
          </div>
        </div>
      </div>
      {/* name , description , price */}
      <div className="mt-3 flex flex-col mx-2">
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 text-xl">{products.name}</h2>
        </Link>
        <div className="mt-1 text-slate-400">{products.description}</div>
        
      </div>

      {/* buttons */}
      <div>
        <div className="flex justify-between items-center mt-10 mx-1">
          <div className="font-bold  text-2xl bottom-5">$ {products.price}</div>
          <button
            className="bg-zinc-800 text-white hover:bg-zinc-950 font-bold
         p-2 px-4  flex items-center justify-center rounded-xl"
          onClick={addToCart()}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
