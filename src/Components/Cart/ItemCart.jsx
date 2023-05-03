
import 'tailwindcss/tailwind.css';
import React from "react";
import { useContext } from 'react';
import CartContext from '../../Contexts/CartContext';

const ItemCart = ({data}) => {
    
    const {name, price, quantity, id, image} = data;

    const { deleteFromCart, addToCart } = useContext(CartContext);

    return (
        <>
            <div className='font-Roboto grid grid-rows-3 grid-cols-2 gap-y-[.5rem] md:grid-col-2 md:grid:rows-3 lg:grid-cols-4 lg:grid-rows-2 xl:grid-cols-6 xl:grid-rows-1
            mx-8 text-center gap-2 place-items-center'>
                
                <h4 className='text-white'>{name}</h4>
                <img className="h-[3rem] w-[3rem]" src={image} alt="" />
                <h5 className='font-bold text-white'>${price}</h5>
                <h5 className='text-white'>Subtotal: ${price*quantity}</h5>

                <div className='flex items-center col-span-full md:col-span-1 lg:col-span-2 xl:col-span-1'>
                    <button className="bg-gray-600 text-white font-bold py-1 px-2 my-1 rounded-full w-[2rem] h-[2rem] cursor-pointer mx-auto" 
                    onClick={() => addToCart(id, false)}>+</button>

                    <h5 className='text-white mx-[.5rem]'>{quantity}</h5>

                    <button className="bg-gray-600 text-white font-bold py-1 px-2 my-1 rounded-full w-[2rem] h-[2rem] cursor-pointer mx-auto" 
                    onClick={() => deleteFromCart(id, false)}>-</button>
                </div>

                <button className="bg-zinc-950 text-first_color hover:bg-first_color hover:text-black font-bold hover:font-bold
         p-2 px-4 flex items-center justify-center rounded-full active:border-2 active:border-black col-span-full md:col-span-1 lg:col-span-2 xl:col-span-1" 
                onClick={() => deleteFromCart(id, true)}>Quitar todos</button>
            </div>
            <hr className="border-gray-500 w-11/12 mx-auto my-5"/>
        </>
    );
}

export default ItemCart;