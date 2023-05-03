import ItemCart from "./ItemCart";
import "tailwindcss/tailwind.css";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2"; /*IMPORTANDO SWEET ALERT2*/

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
  /* FIN FUNCION CALCULAR TOTAL*/

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
  /*FIN FUNCION SWEETALERT - ES LLAMADA EN EL ONCLICK*/

  return (
    <div id="cart" className="relative">
      <div
        className="absolute w-10/12 min-h-300p w-1/3 bg-gray-800 mx-auto top-20 left-1/2 transform -translate-x-1/2 
            z-40 rounded-md w-5/6 border-2 border-gray-500"
      >
        <FaTimes
          className="absolute text-white z-50 h-[10em] w-[1rem] top-[-3.5rem] right-[1rem] cursor-pointer"
          onClick={() => {
            setIsShowing((isShowing) => !isShowing);
          }}
        />

        <h1 className="text-4xl text-center py-1 font-Roboto text-white">
          Carrito
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
          <h5 className="text-white text-[1.4rem] text-yellow-300 text-bold col-span-full text-center">
            Total: $ {totals}
          </h5>
          <div className="flex flex-col items-center sm:flex-row justify-center col-span-6 gap-[3rem]">
            <button
              className="bg-yellow-300 text-black font-bold py-1 px-4 rounded my-8 cursor-pointer h-[2rem] w-[10rem] sm:me-[1rem]"
              onClick={() => {
                clearCart();
                updateState();
              }}
            >
              Limpiar Carrito
            </button>
            <button
              className="bg-yellow-300 text-black font-bold py-1 px-4 rounded my-8 cursor-pointer h-[2rem] w-[10rem] sm:ms-[1rem]"
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
