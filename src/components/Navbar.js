import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as Cart } from './cart.svg';

export default function Navbar({ totalItems }) {
  return (
    <div className="Navbar">
      <nav>
        <h1>Fintastic</h1>
        <div className="navlinks">
          <Link to="/shopping_cart">Home</Link>
          <Link to="/shopping_cart/products">Products</Link>
          <Link to="/shopping_cart/cart">
            <Cart width="50px" height="50px" />
            <span>{totalItems}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
