import { useContext } from 'react';
import  ProductContext  from '../Contexts/ProductContext';

const Product = ({product}) => {
 

  return (
    <div className="">
     
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
  
    </div>
  );
};

export default Product;
