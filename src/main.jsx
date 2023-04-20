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
