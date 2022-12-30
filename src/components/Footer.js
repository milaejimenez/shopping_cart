import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
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
          <p>Order Status</p>
        </div>
      </div>
    </div>
  );
}
