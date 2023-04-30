import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./Contexts/ProductContext";
import { CartProvider } from "./Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>
);
