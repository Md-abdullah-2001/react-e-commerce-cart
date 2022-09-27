import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Shop/Shop.js";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart } = props;

  const { name, price, img, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="cart-info">
        <p className="card-name">{name}</p>
        <p className="card-price">Price: ${price}</p>
        <p>Brand: {seller}</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="cart-btn"
      >
        <p>
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Product;
