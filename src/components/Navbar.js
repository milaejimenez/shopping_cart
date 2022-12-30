import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <h1>Fintastic</h1>
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>
      </nav>
    </div>
  );
}
