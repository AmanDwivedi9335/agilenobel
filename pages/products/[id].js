import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/products/${id}`).then((response) => {
        setProduct(response.data);
      });
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <section>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <Image 
        src={product.imageUrl} 
        alt={product.name} 
        width={500} // Replace with appropriate width
        height={500} // Replace with appropriate height
        layout="responsive" // Optional: to make image responsive
        />
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {/* Add customer reviews here */}
      </section>
      <section>
        <h2>Related Products</h2>
        {/* Add related products here */}
      </section>
    </div>
  );
};

export default ProductPage;
