import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { ProductContext } from "../../Contexts/ProductContext";
import Swal from "sweetalert2";
import '@sweetalert2/theme-dark/dark.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

    /*FUNCION SWEETALERT - ES LLAMADA EN EL ONCLICK*/
    const succesPay = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The product was added to Cart",
        theme: "dark",
        showConfirmButton: false,
        timer: 1500,
      });
    };

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto grid">
        {/* image and text wrapper*/}
        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[300px] lg:max-w-sm"
              src={product.image}
              alt={product.name}
            />
          </div>
          {/* text */}
          <div className="text-4xl font-bold mb-4 flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 text-first_color mx-w-[450px] mx-auto">
              {product.name}
            </h1>
            <p className="text-2xl mb-4 text-first_color">
              {product.description}
            </p>
            <p className="text-2xl font-bold mb-4 text-red-500">
              Price: ${product.price}
            </p>
            {/* buttons */}
            <div className="flex flex-col w-96 mx-auto">
              <button
                className="bg-violet-400 active:bg-violet-300 text-gray-950 px-8 py-4 rounded-2xl"
                onClick={() => {
                  succesPay();
                  addToCart(product.id);
                }}
              >
                Add to Cart
              </button>
              <Link to="/">
                <button className="bg-gray-300 text-gray-700 px-8 py-4 rounded-2xl flex-1 mt-4">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
