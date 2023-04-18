import product1 from "./assets/Carousel-img/uno.jpg";
import product2 from "./assets/Carousel-img/dos.jpg";
import product3 from "./assets/Carousel-img/tres.jpg";
import product4 from "./assets/Carousel-img/cuatro.jpg";
import product5 from "./assets/Carousel-img/cinco.jpg";


import CartIcon from "./Components/Cart/CartIcon";
import React, { useState } from "react";
import Carousel from "./components/Carousel";
import { FaTimes, FaShoppingCart } from "react-icons/fa"
import { TYPES } from "./components/Cart/Actions"
import { useReducer } from "react";
import { cartInitialState, cartReducer } from "./components/Cart/CartReducer";
import Products from "./components/Cart/Products";
import Footer from "./Components/Footer";
import 'tailwindcss/tailwind.css';


const slides = [
  {id: 1, productImage: product1},
  {id: 2, productImage: product2},
  {id: 3, productImage: product3},
  {id: 4, productImage: product4,},
  {id: 5, productImage: product5,},
];

function App() {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const {products, cart,} = state;

  const addToCart = (id) => {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

// deleteAllItems es un booleano - para boton quitar uno es false.
// para quitar todos es true. - VER componente ItemCart
  const deleteFromCart = (id, deleteAllItems) => {
      deleteAllItems ? dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id}) : dispatch({type: TYPES.REMOVE_ITEM, payload: id})
  };

  const [showCart, setShowCart] = useState(false);

  const clearCart = () => {
      dispatch({ type: TYPES.CLEAR_CART });
      handleCartToggle();

  };


  const handleCartToggle = () => {
    setShowCart(!showCart);
  }




  return (
    <div className="bg-gray-800">
      {showCart ? (
        <>
          <FaTimes className="h-7 w-7 absolute top-10 right-10 z-50 text-white cursor-pointer" onClick={handleCartToggle} />
          <CartIcon showCart={showCart} cart={cart} deleteFromCart={deleteFromCart} clearCart={clearCart}/>
        </>
      ) : (
        <FaShoppingCart className="h-7 w-7 absolute top-10 right-10 z-50 text-white cursor-pointer" onClick={handleCartToggle} />
      )}
      <Carousel slides={slides} />

      <div>{products.map((product) => {return <Products key={product.id} data={product} addToCart={addToCart} />})}</div>
      <Footer />
    </div>
  );
}

export default App;