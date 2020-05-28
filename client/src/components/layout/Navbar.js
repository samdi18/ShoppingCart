import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <div className="navbar container">
      <div className="logo">{title}</div>
      <ul>
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
