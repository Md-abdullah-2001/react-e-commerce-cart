import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import OrderSummary from "../../OrderSummary/OrderSummary";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";

const Orders = () => {
  const { products, previous } = useLoaderData();
  const [cart, setCart] = useState(previous);
  const removeItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div>
      <div className="shop-field">
        <div className="summary-container">
          {cart.map((product) => (
            <OrderSummary
              key={product.id}
              product={product}
              removeItem={removeItem}
            ></OrderSummary>
          ))}
        </div>
        <div className="product-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
