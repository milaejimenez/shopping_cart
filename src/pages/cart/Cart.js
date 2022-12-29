import './Cart.css';

import React, { useEffect } from 'react';

export default function Cart({ cart }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
