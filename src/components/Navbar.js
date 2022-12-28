import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Shopping Cart</Link>
      </nav>
    </div>
  );
}
