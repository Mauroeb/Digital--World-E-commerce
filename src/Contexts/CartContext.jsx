import { createContext, useReducer, useState, useEffect } from "react";
import { TYPES } from "../Components/Cart/Actions";
import { cartInitialState, cartReducer } from "../Components/Cart/CartReducer";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const [isShowing, setIsShowing] = useState(false)

    const {products, cart} = state;

    /* INICIO CART LOCAL STORAGE */

    // Cargar el carrito desde localStorage al montar el componente
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            dispatch({ type: TYPES.LOAD_CART, payload: storedCart });
        }
    }, []);

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const storedCart = state.cart;
    /* FIN CART LOCAL STORAGE */

    function addToCart(id) {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    }

    const addOneFromCart = (id) => {
        dispatch({ type: TYPES.ADD_ONE_FROM_CART, payload: id });
    };

    const deleteFromCart = (id, deleteAllItems) => {
        deleteAllItems ? dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id}) : dispatch({type: TYPES.REMOVE_ITEM, payload: id}),
        cart.length === 0 ? setIsShowing((isShowing) => !isShowing) : null
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART });
        setIsShowing((isShowing) => !isShowing)
    };

    const updateState = async () => {
        const productsURL = "http://localhost:3000/products";
        const cartURL = "http://localhost:3000/cart";
        const resProducts = await axios.get(productsURL);
        const resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data;
        const newCartItem = await resCart.data

        dispatch({type: TYPES.READ_STATE, payload: [newProduct, newCartItem]})
    }

    useEffect( () => {
        updateState()
    }, [])

    return (
        <CartContext.Provider 
        value={{
        addToCart,
        addOneFromCart,
        deleteFromCart,
        clearCart,
        products,
        cart,
        isShowing,
        storedCart,
        setIsShowing,
        updateState
        }} >
        {children}
        </CartContext.Provider>
    );
};

export default CartContext;
