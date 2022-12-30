import './Productdetails.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Productdetails({ handleAddToCart }) {
  const { id } = useParams();

  //Fetch data
  const url = 'https://fakestoreapi.com/products/' + id;
  const [product, setProduct] = useState(url);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(product)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        setError('Could not fetch the data');
        console.log(error);
      });
  }, [setProduct, product, setError]);

  //Render product details
  return (
    <div key={product.id} className="product-item">
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <img src={product.image} alt={product.description} />
      <p className="description">{product.description}</p>
      <button
        type="button"
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
