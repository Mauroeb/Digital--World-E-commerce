import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./Contexts/ProductContext";
import CartProvider from "./Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './Components/Contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
)
