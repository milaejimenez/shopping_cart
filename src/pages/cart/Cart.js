import './Cart.css';

import React from 'react';

export default function Cart({ cart, handleAddToCart, handleRemoveFromCart }) {
  //Calculate total price
  const totalPrice = cart.reduce(function (acc, obj) {
    return acc + obj.price * obj.quantity;
  }, 0);

  const roundedPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add</button>
          <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
        </div>
      ))}
      <p>Total Price: {roundedPrice}</p>
    </div>
  );
}
