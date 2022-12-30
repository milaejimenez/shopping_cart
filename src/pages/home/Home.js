import './Home.css';

import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div
        className="jumbotron"
        style={{ backgroundImage: "url('/jumbotron-img.jpg')" }}
      >
        <div>
          <p>Everything you need straight to your doorstep</p>
          <button type="button">
            <Link to="/products">See Catalog</Link>
          </button>
        </div>
      </div>
      <div className="featured">
        <h2>Featured items</h2>
        <div className="featured-items">
          {products &&
            products.map((product) => (
              <div key={product.id}>
                <img src={product.image} alt={product.title} />
              </div>
            ))}
        </div>
      </div>
      <div className="footer">
        <div className="newsletter">
          <h3>Join the Fintastic family</h3>
          <p>Subscribe to our newsletter and get a 5% discount coupon</p>
          <div>
            <input type="email" placeholder="Enter your email"></input>
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Delivery</p>
            <p>Payment</p>
            <p>Returns</p>
            <p>Order Status</p>`
          </div>
        </div>
      </div>
    </div>
  );
}
