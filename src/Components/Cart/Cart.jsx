import ItemCart from "./ItemCart";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    cart,
    deleteFromCart,
    clearCart,
    addOneFromCart,
    setIsShowing,
    updateState,
  } = useContext(CartContext);

  /* FUNCION PARA CALCULAR TOTAL*/
  const totals = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  /*FUNCION SWEETALERT - ES LLAMADA EN EL ONCLICK*/
  const succesPay = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Pago Exitoso",
      showConfirmButton: false,
      timer: 1500,
    });
  };



  return (
    <div id="cart" className="relative">
      <div
        className="absolute px-[1rem] py-[1.5rem] md:px-[1.5rem] w-10/12 min-h-300p bg-zinc-800 mx-auto top-[12rem] left-1/2 transform -translate-x-1/2 
            z-40 rounded-md border-[2px] border-first_color"
      >
        <FaTimes
          className="absolute text-white z-50 h-[10em] w-[1rem] top-[-3.5rem] right-[1rem] cursor-pointer"
          onClick={() => {
            setIsShowing((isShowing) => !isShowing);
          }}
        />

        <h1 className="text-4xl text-center py-1 font-Roboto text-white mb-[1rem]">
          Cart
        </h1>

        <div>
          {cart.map((item) => {
            return (
              <ItemCart
                totals={totals}
                key={item.id}
                data={item}
                deleteFromCart={deleteFromCart}
                addOneFromCart={addOneFromCart}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-8 text-center gap-2">
          <h5 className="text-[1.7rem] text-first_color text-bold mb-[1rem] col-span-full text-center">
            Total: $ {totals.toFixed(2)}
          </h5>
          <div className="flex flex-col items-center sm:flex-row justify-center col-span-6 gap-[3rem]">
            <button
              className="bg-zinc-950 text-first_color hover:bg-first_color hover:text-black font-bold hover:font-bold
              p-2 px-4 flex items-center justify-center rounded-full active:border-2 active:border-black"
              onClick={() => {
                clearCart();
                updateState();
              }}
            >
              Limpiar Carrito
            </button>
            <button
              className="bg-zinc-950 text-first_color hover:bg-first_color hover:text-black font-bold hover:font-bold
              p-2 px-4 flex items-center justify-center rounded-full active:border-2 active:border-black"
              onClick={() => {
                succesPay();
                setIsShowing((isShowing) => !isShowing);
                clearCart();
                updateState();
              }}
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
