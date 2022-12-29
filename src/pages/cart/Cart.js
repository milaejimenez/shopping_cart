import './Cart.css';

import React from 'react';

export default function Cart({ cart, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <button onClick={() => handleAddToCart(product)}>Add</button>
          <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
