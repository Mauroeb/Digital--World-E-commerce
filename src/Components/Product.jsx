import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Contexts/CartContext";
import { FaShoppingCart, FaPlus } from "react-icons/fa";




const Product = ({ product }) => {
  // funcion addToCart extraída del cartcontext para el botón
  const { addToCart } = useContext(CartContext);
  const [showPlusIcon, setShowPlusIcon] = useState(false);

  const handleFaPlus = () => {
    setTimeout( () => {
      setShowPlusIcon(false)
    }, 500)
  } 
  
  return (
    <div className="w-[20rem] mx-auto sm:w-80 mb-10 p-1 hover:drop-shadow-2xl group bg-zinc-800 rounded-lg shadow-lg relative">
      <FaShoppingCart className="absolute top-[1rem] right-[1rem] w-[2rem] h-[2rem] opacity-0 cursor-pointer transition-opacity 
      group-hover:opacity-100 delay-75 text-white" onClick={() => {
              addToCart(product.id);
              setShowPlusIcon(true);
              handleFaPlus()
            }} />
      {showPlusIcon ? 
      <FaPlus className="absolute top-[.5rem] right-[.5rem] text-green-500 animate-ping"/> : null} 
      
      <div
        className="flex justify-center items-center 
        overflow-hidden group transition container mx-auto"
      >
        <div className="w-full flex justify-center items-center">
          {/* image */}
          <div className="w-full h-64 object-cover p-12 flex mx-auto justify-center items-center bg-violet-300 rounded-lg">
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
          <h2 className="font-semibold mb-1 text-xl text-first_color">
            {product.name}
          </h2>
        </Link>
        <div className="mt-1 text-white">{product.description}</div>
      </div>

      {/* buttons */}
      <div className="">
        <div className="flex justify-between items-center mt-10 mb-0">
          <div className="font-bold text-white text-2xl ">
            $ {product.price}
          </div>
          <button
            className="bg-zinc-950 text-first_color hover:bg-first_color hover:text-black font-bold hover:font-bold
         p-2 px-4 flex items-center justify-center rounded-full active:border-2 active:border-black"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
