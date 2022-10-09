import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OrderSummary.css";

const OrderSummary = ({ product, removeItem }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div>
      <div className="single-summary-container">
        <img alt="/" src={img} />
        <div className="details-summary">
          <div className="info-summary">
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <h4>Items: {quantity}</h4>
          </div>
          <div>
            <button onClick={() => removeItem(id)}>
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
