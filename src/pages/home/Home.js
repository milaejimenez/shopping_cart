import './Home.css';

import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
  //State to save product data
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  //Fetch data
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        setError('Could not fetch the data');
        console.log(error);
      });
  }, [setProducts, setError]);

  return (
    <div>
      <div>
        <p>Everything you need straight to your doorstep</p>
        <button type="button">See catalog</button>
      </div>
      <div>
        <h2>Featured items</h2>
        <div className="featured"></div>
      </div>
    </div>
  );
}
