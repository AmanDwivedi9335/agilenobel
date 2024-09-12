import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import axios from 'axios';
import Link from 'next/link';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <AdminLayout>
      <h1>Manage Products</h1>
      <button><Link href="/admin/products/new">Add New Product</Link></button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button><a href={`/admin/products/edit/${product.id}`}>Edit</a></button>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default ProductsPage;
