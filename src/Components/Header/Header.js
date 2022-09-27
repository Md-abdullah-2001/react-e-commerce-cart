import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="top">
      <nav className="navbar">
        <img src={logo} alt="" />
        <div>
          <a href="/Shop">Shop</a>
          <a href="/Orders">Orders</a>
          <a href="/inventory">Inventory</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
