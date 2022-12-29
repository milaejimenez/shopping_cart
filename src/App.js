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
  //Add and remove from cart functions
  const [cart, setCart] = useState([]);

  const addToCart = function (product) {
    setCart((prevCart) => [...prevCart, product]);
  };

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
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
