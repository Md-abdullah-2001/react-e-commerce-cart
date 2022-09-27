import React, { useEffect, useState } from "react";
import Product from "../Product/Product.js";
import "./Shop.css";

const Shop = () => {
  const [products, srtProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => srtProducts(data));
  });

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-field">
      <div className="headline">
        <h2>Products List</h2>
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>

      <div className="product-summary">
        <h2>Orders Summary</h2>
        <p>Total Product Added: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
