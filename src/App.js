import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

//page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Productdetails from './pages/products/Productdetails';

//counter to keep track of product's quantity
let counter = 1;

function App() {
  //Add from cart functions
  const [cart, setCart] = useState([]);

  const addToCart = function (product) {
    const increaseQuantity = function () {
      counter++;
      return counter;
    };

    if (cart.some((item) => item.id === product.id)) {
      const newArray = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: increaseQuantity() }
          : item
      );
      setCart(newArray);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  //Remove from cart function
  const removeFromCart = function () {};

  //Render component
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
