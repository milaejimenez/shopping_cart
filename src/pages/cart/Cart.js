import './Cart.css';

import React from 'react';

export default function Cart({ cart, handleAddToCart, handleRemoveFromCart }) {
  // Calculate total price
  const calculatePrice = cart
    .map((item) => {
      const itemGrossTotal = item.quantity * item.price;
      return { ...item, price: itemGrossTotal };
    })
    .reduce((acc, currVal) => acc + currVal.price, 0);

  // Get only first two decimals
  const totalPrice = (Math.round(calculatePrice * 100) / 100).toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <button onClick={() => handleAddToCart(product)}>Add</button>
          <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
        </div>
      ))}
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}
