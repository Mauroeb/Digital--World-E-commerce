import { createContext, useReducer, useState } from "react";
import { TYPES } from "../Cart/Actions";
import { cartInitialState, cartReducer } from "../Cart/CartReducer";



export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const {products, cart,} = state;

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

    const addOneFromCart = (id) => {
        dispatch({ type: TYPES.ADD_ONE_FROM_CART, payload: id });
    };

    const deleteFromCart = (id, deleteAllItems) => {
        deleteAllItems ? dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id}) : dispatch({type: TYPES.REMOVE_ITEM, payload: id})
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART });
        setIsShowing((isShowing) => !isShowing)
};

const [isShowing, setIsShowing] = useState(false)

return (
    <CartContext.Provider value={{addToCart, addOneFromCart, deleteFromCart, clearCart, products, cart, isShowing, setIsShowing}} >
        {children}
    </CartContext.Provider>
);
};

export default CartContext