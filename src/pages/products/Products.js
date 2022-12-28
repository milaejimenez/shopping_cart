import './Products.css';

import React, { useEffect, useState } from 'react';
import { getStaticContextFromError } from '@remix-run/router';

export default function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  //Fetch data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        setError('Could not fetch the data');
        console.log(error);
      });
  }, [setProducts, setError]);

  return (
    <div>
      <h1>Products</h1>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
          </div>
        ))}
      {error && <p>{error}</p>}
    </div>
  );
}
