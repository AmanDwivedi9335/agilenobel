import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/products/${id}`).then((response) => {
        setProduct(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/products/${id}`, product)
      .then(() => {
        router.push('/admin/products');
      });
  };

  return (
    <AdminLayout>
      <h1>Edit Product</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </AdminLayout>
  );
};

export default EditProductPage;
