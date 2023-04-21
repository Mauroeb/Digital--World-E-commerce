import ItemCart from "./ItemCart";
import 'tailwindcss/tailwind.css';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { FaTimes } from "react-icons/fa";

/* function totales () {
    const subtotals = data.map(data => data.price * data.quantity);
    const total = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);
    return total;
} */ /*NO FUNCIONA - TENDRIA QUE DEVOLVER LA SUMA DE LOS SUBTOTALES*/


const Cart = ({}) => {
/* event.preventDefault() */ /* PARA PREVENIR QUE SE BORRE TODO DEL CARRITO CUANDO RECARGO PAGINA*/

    const { cart, deleteFromCart, clearCart, addOneFromCart, setIsShowing } = useContext(CartContext);

    return (
        
        <div id="cart" className="relative">
            <div className="absolute w-10/12 min-h-300p w-1/3 bg-gray-800 mx-auto top-20 left-1/2 transform -translate-x-1/2 
            z-40 rounded-md w-5/6 border-2 border-gray-500">

                <FaTimes className="absolute text-white z-50 h-[10em] w-[1rem] top-[-3.5rem] right-[1rem] cursor-pointer" onClick={ () => {
                    setIsShowing((isShowing) => !isShowing)
                }} />
                
                <h1 className="text-4xl text-center py-1 font-Roboto text-white">Carrito de Compras</h1> 
                
                <h2 className="text-center font-Roboto text-3xl text-white mt-4">Sus Productos</h2><br></br>
                
                <div>{cart.map((item) => {return <ItemCart key={item.id} data={item} deleteFromCart={deleteFromCart} addOneFromCart={addOneFromCart} />})}</div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-8 text-center gap-2">
                <h5 className='text-white'>Total: ${/* totales() */}</h5>
                    <button className="bg-yellow-300 text-black font-bold py-1 px-4 rounded my-8 cursor-pointer " 
                    onClick={() => clearCart()}>Limpiar Carrito</button>
                    <button className="bg-yellow-300 text-black font-bold py-1 px-4 rounded my-8 cursor-pointer ">Pagar</button>
                </div>

            </div>
        </div>

        
    );
};

export default Cart;