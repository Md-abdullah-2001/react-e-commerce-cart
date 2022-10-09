import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { addToDb, getStoredData } from "../../utilities/fakedb.js";
import Cart from "../Cart/Cart.js";
import Product from "../Product/Product.js";
import "./Shop.css";

const Shop = () => {
  const products = useLoaderData();
  // console.log(products);

  const [cart, setCart] = useState([]);

  // useEffect(() => {
  // const loadStored = getStoredData();
  // for (const id in loadStored) {
  //   const addedProduct = products.find((product) => product.id === id);
  //   // console.log(addedProduct);
  //   }
  // }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div>
      <h2 className="headline">Products List</h2>
      <div className="shop-field">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="product-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
