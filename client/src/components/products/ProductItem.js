import React, { useContext } from "react";
import PropTypes from "prop-types";

import OrderContext from "../../context/order/orderContext";

const ProductItem = ({ product }) => {
  const orderContext = useContext(OrderContext);

  const { addToCart } = orderContext;

  const handleClick = () => {
    addToCart(product);
    console.log("adding to cart");
  };

  return (
    <div className="card">
      <p>{product.name}</p>
      <span> Quantity : {product.productQty} kg</span>
      <p>$ {product.price}</p>
      <img
        src={require("../../images/plus.svg")}
        alt=""
        className="plus-img"
        onClick={handleClick}
      />
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
