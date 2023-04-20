import { useContext } from 'react';
import { ProductContext } from './Contexts/ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
