import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  let totalGrand = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping: ${shipping}</p>
      <p>Total Tax: ${tax}</p>
      <h3>Grand Total: ${totalGrand}</h3>
    </div>
  );
};

export default Cart;
