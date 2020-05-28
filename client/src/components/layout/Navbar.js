import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import OrderHistory from "../orders/OrderHistory";

const Navbar = ({ title }) => {
  return (
    <div className="navbar container">
      <div className="logo">
        <Link to="/"> {title}</Link>
      </div>
      <ul>
        <li>
          <Link to="/orderHistory">Order History</Link>
        </li>

        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};

Navbar.prototype = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "ShoppingCart",
};

export default Navbar;
