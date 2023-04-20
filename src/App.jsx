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
import { Transition } from '@headlessui/react'



const slides = [
  {id: 1, productImage: product1},
  {id: 2, productImage: product2},
  {id: 3, productImage: product3},
  {id: 4, productImage: product4,},
  {id: 5, productImage: product5,},
];

function App() {

  const { products, isShowing, setIsShowing } = useContext(CartContext);
  

  return (
    <div className="bg-gray-800">
      <>
        <FaShoppingCart className="h-7 w-7 absolute top-10 right-10 z-50 text-white cursor-pointer" onClick={() => {
          setIsShowing((isShowing) => !isShowing)}} />
        <Transition
          show={isShowing}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Cart />
        </Transition>
      </>

      <Carousel slides={slides} />

      <div>{products.map((product) => {return <Products key={product.id} data={product} />})}</div>
      <Footer />
    </div>
  );
}

export default App;