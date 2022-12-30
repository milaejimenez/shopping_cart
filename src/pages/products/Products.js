import './Products.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Endpoints
const allProducts = 'https://fakestoreapi.com/products';
const selectCategories = 'https://fakestoreapi.com/products/category';
const electronics = selectCategories + '/electronics';
const jewelery = selectCategories + '/jewelery';
const womensClothing = selectCategories + "/women's%20clothing";
const mensClothing = selectCategories + "/men's%20clothing";

export default function Products({ handleAddToCart }) {
  //State to save product data
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(allProducts);

  //Set the url
  const handleUrl = function (path) {
    setUrl(path);
  };

  //Fetch data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        setError('Could not fetch the data');
        console.log(error);
      });
  }, [setProducts, setError, url]);

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="buttons">
        <button type="button" onClick={() => handleUrl(allProducts)}>
          All Products
        </button>
        <button
          type="button"
          onClick={() => {
            handleUrl(electronics);
          }}
        >
          Electronics
        </button>
        <button
          type="button"
          onClick={() => {
            handleUrl(jewelery);
          }}
        >
          Jewelery
        </button>
        <button
          type="button"
          onClick={() => {
            handleUrl(womensClothing);
          }}
        >
          Women's Clothing
        </button>
        <button
          type="button"
          onClick={() => {
            handleUrl(mensClothing);
          }}
        >
          Men's Clothing
        </button>
      </div>
      <div className="product-items">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <Link to={`/productdetails/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
              <h2>{product.title.slice(0, 38)}</h2>
              <p>{product.price + ' $'}</p>
              <button
                type="button"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
