import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

//page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Productdetails from './pages/products/Productdetails';

function App() {
  //Add from cart functions
  const [cart, setCart] = useState([]);

  const addToCart = function (product) {
    //checks if product is already in the cart's array. If true, increases quantity propery in object. If false, adds the product and sets quantity to one.
    if (cart.some((item) => item.id === product.id)) {
      const newArray = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: product.quantity + 1 }
          : item
      );
      setCart(newArray);
    } else {
      const newObj = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, newObj]);
    }
  };

  const removeFromCart = function (product) {
    const newArray = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(newArray);
  };
  // Calculate total products quantity
  const totalItems = cart.reduce(function (acc, obj) {
    return acc + obj.quantity;
  }, 0);

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
