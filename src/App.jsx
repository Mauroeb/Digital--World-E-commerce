import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar";
import Announcement from "./Components/Announcement";
import ScrollButton from "./Components/ScrollButton";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Contexts/CartContext";

import product1 from "./assets/Carousel-img/uno.jpg";
import product2 from "./assets/Carousel-img/dos.jpg";
import product3 from "./assets/Carousel-img/tres.jpg";
import product4 from "./assets/Carousel-img/cuatro.jpg";
import product5 from "./assets/Carousel-img/cinco.jpg";
import Ruta from "./Route/Ruta";

import { Content } from "./Styled";
import { FaShoppingCart } from "react-icons/fa";

const slides = [
  { id: 1, productImage: product1 },
  { id: 2, productImage: product2 },
  { id: 3, productImage: product3 },
  { id: 4, productImage: product4 },
  { id: 5, productImage: product5 },
];

const App = () => {
  const { cart, products, isShowing, setIsShowing } = useContext(CartContext);

  const [nothingInCart, setIsNothingInCart] = useState(false);

  const handleNothingInCart = () => {
    setIsNothingInCart((nothingInCart) => !nothingInCart);
    setTimeout(() => {
      setIsNothingInCart((nothingInCart) => !nothingInCart);
    }, 1000);
    clearTimeout(handleNothingInCart);
  };

  return (
    <div className="overflow-hidden max-sm">
      <Router>
        <div className="bg-gray-800">
          <div>
            <FaShoppingCart
              className="h-[1.75rem] w-[1.75rem] absolute top-[4rem] right-[5.5rem] md:right-[4.8rem] z-50 text-white cursor-pointer"
              onClick={() => {
                setIsShowing((isShowing) => !isShowing);
                handleNothingInCart();
              }}
            />

            {cart.length > 0 ? (
              <div
                className="h-[1.5rem] w-[1.5rem] absolute top-[3.4rem] right-[4.5rem] md:right-[3.9rem] z-50 
            font-bold text-white text-center bg-red-500 rounded-full cursor-pointer"
              >
                {cart.length}
              </div>
            ) : null}

            {isShowing && cart.length > 0 ? (
              <Cart handleNothingInCart={handleNothingInCart} />
            ) : nothingInCart ? (
              <div className="relative">
                <div
                  className="absolute w-[13rem] h-[8rem] md:w-[15rem] md:h-[9rem] lg:w-[20rem] 
                lg:h-[11rem] bg-zinc-800 mx-auto top-[10rem] left-1/2 transform -translate-x-1/2 
                z-40 rounded-md border-[2px] border-first_color text-first_color font-bold text-[1.3rem] 
                md:text-[1.7rem] lg:text-[2.1rem] grid place-items-center"
                >
                  No items found!
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <Announcement />
        <Navbar />
        <Carousel slides={slides} />
        <Content />
        <ScrollButton />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
