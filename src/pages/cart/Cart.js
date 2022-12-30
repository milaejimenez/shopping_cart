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
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="product">
          <p>{product.title}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <div class="add-remove">
            <button onClick={() => handleAddToCart(product)}>+</button>
            <p>{product.quantity}</p>
            <button onClick={() => handleRemoveFromCart(product)}>-</button>
          </div>
        </div>
      ))}
      <div class="total-price">
        <h3>Total</h3>
        <div>
          <p>Sub-total</p>
          <p>{totalPrice}</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div>
          <p>Total(VAT incl.)</p>
          <p>{totalPrice}</p>
        </div>
        <button type="button">Order</button>
      </div>
    </div>
  );
}
