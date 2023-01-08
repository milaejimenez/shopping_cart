import './Cart.css';

import React from 'react';

const alertMessage = function () {
  alert('Thank you for checking out my project!');
};

export default function Cart({
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  totalItems,
}) {
  // Calculate total price
  const calculatePrice = cart
    .map((item) => {
      const itemGrossTotal = item.quantity * item.price;
      return { ...item, price: itemGrossTotal };
    })
    .reduce((acc, currVal) => acc + currVal.price, 0);

  // Get only first two decimals
  const totalPrice = (Math.round(calculatePrice * 100) / 100).toFixed(2);

  //Delete items that reach quantity 0
  cart.map((product) => {
    if (product.quantity === 0) {
      const index = cart.indexOf(product);
      cart.splice(index, 1);
    }
  });

  //Conditional rendering: if shopping cart is empty, display message. Else, map over cart state.
  let displayCart;
  let displayTotalPrice;

  if (cart.length === 0) {
    displayCart = (
      <p>Your shopping cart is empty. Add a product to the cart.</p>
    );
  } else {
    displayCart = cart.map((product) => (
      <div key={product.id} className="product">
        <p>{product.title}</p>
        <p>Price: {product.price} $</p>
        <p>Quantity: {product.quantity}</p>
        <div class="add-remove">
          <button onClick={() => handleAddToCart(product)}>+</button>
          <p>{product.quantity}</p>
          <button onClick={() => handleRemoveFromCart(product)}>-</button>
        </div>
      </div>
    ));
  }
  // Displays total price if cart is not empty
  if (cart.length !== 0) {
    displayTotalPrice = (
      <div>
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
          <button type="button" onClick={alertMessage}>
            Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart content-wrapper">
      <h1>Shopping Cart</h1>
      {displayCart}
      {displayTotalPrice}
    </div>
  );
}
