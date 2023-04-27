import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import product1 from "./assets/Carousel-img/uno.jpg";
import product2 from "./assets/Carousel-img/dos.jpg";
import product3 from "./assets/Carousel-img/tres.jpg";
import product4 from "./assets/Carousel-img/cuatro.jpg";
import product5 from "./assets/Carousel-img/cinco.jpg";


import Carousel from "./Components/Carousel";
import { FaShoppingCart } from "react-icons/fa"
import Products from "./Components/Cart/Products";
import Footer from "./Components/Footer";
import 'tailwindcss/tailwind.css';
import { useContext, useState } from "react";
import CartContext from "./Components/Contexts/CartContext";
import Cart from "./Components/Cart/Cart";
import { FaTimes } from "react-icons/fa";

const slides = [
  { id: 1, productImage: product1 },
  { id: 2, productImage: product2 },
  { id: 3, productImage: product3 },
  { id: 4, productImage: product4 },
  { id: 5, productImage: product5 },
];


const App = () => {

  const { cart, products, isShowing, setIsShowing } = useContext(CartContext);
  
  const [ nothingInCart, setIsNothingInCart ] = useState(false)

  const handleNothingInCart = () => {
    setIsNothingInCart(nothingInCart => !nothingInCart);
    setTimeout( () =>{
      setIsNothingInCart(nothingInCart => !nothingInCart)
    }, 1000)
  }

  return (
    <>

      <div className="bg-gray-800">
        <div>
          <FaShoppingCart className="h-[1.75rem] w-[1.75rem] absolute top-[2.5rem] right-[2.5rem] z-50 text-white cursor-pointer" onClick={() => {
            setIsShowing((isShowing) => !isShowing);
            handleNothingInCart()}} />

          {cart.length > 0 ? 
          <div className="h-[1.5rem] w-[1.5rem] absolute top-[1.5rem] right-[1.5rem] z-50 font-bold text-white text-center bg-red-500 rounded-full cursor-pointer">{cart.length}</div> : null}

          {isShowing && cart.length > 0 ? 
          <Cart handleNothingInCart={handleNothingInCart}/> : 
          nothingInCart ? (
            <div className="relative">
              <div className="absolute w-[13rem] h-[8rem] md:w-[15rem] md:h-[9rem] lg:w-[20rem] lg:h-[11rem] bg-gray-800 mx-auto top-[8rem] left-1/2 transform -translate-x-1/2 
              z-40 rounded-md border-2 border-gray-500 text-white font-bold text-[1.3rem] md:text-[1.7rem] lg:text-[2.1rem] grid place-items-center">No items found!

                  <FaTimes className="absolute text-white z-50 h-[10rem] w-[.7rem] top-[-4rem] right-[.5rem] cursor-pointer" onClick={ () => {
                      setIsShowing((isShowing) => !isShowing)
                  }} />
              </div>
            </div>
          ) : null}
      </div>
      <div className="overflow-hidden max-sm">
        <Router>
          <Carousel slides={slides} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  };
  </>
  
export default App;