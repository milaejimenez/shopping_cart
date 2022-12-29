import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

//page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Productdetails from './pages/products/Productdetails';

//counter to keep track of a single product's quantity
let counter = 1;

function App() {
  //Add from cart functions
  const [cart, setCart] = useState([]);

  const addToCart = function (product) {
    const increaseQuantity = function () {
      counter++;
      return counter;
    };

    //checks if product is already in the cart's array. If true, adds quantity propery to object. If false, adds the product.
    if (cart.some((item) => item.id === product.id)) {
      const newArray = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: increaseQuantity() }
          : item
      );
      setCart(newArray);
    } else {
      const newObj = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, newObj]);
    }
  };

  const removeFromCart = function () {};

  //Remove from cart function
  // const removeFromCart = function (product) {
  //   const objIndex = cart.findIndex((obj) => obj.id == product.id);
  //   const newArray = (cart[objIndex].quantity = product.quantity - 1);
  //   setCart(newArray);
  // };

  // Calculate total products quantity
  const totalItems = cart.reduce(function (acc, obj) {
    return acc + obj.quantity;
  }, 0);

  console.log(totalItems);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products handleAddToCart={addToCart} />}
          />
          <Route
            path="/productdetails/:id"
            element={<Productdetails handleAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleAddToCart={addToCart}
                handleRemoveFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
