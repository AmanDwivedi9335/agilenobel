import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <section>
        <h1>All Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>{product.name}</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Categories</h2>
        {/* Add categories filters here */}
      </section>
      <section>
        <h2>Filters</h2>
        {/* Add product filters here */}
      </section>
    </div>
  );
};

export default ProductsPage;
