import React, { useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';
import axios from 'axios';
import { useRouter } from 'next/router';

const NewProductPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/products', product)
      .then(() => {
        router.push('/admin/products');
      });
  };

  return (
    <AdminLayout>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={product.description} onChange={handleChange}></textarea>
        </label>
        <label>
          Price:
          <input type="text" name="price" value={product.price} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </AdminLayout>
  );
};

export default NewProductPage;
