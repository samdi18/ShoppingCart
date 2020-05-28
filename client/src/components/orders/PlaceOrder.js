import React, { useContext } from "react";

import OrderContext from "../../context/order/orderContext";

const PlaceOrder = () => {
  const orderContext = useContext(OrderContext);

  const { total, pop } = orderContext;
  return (
    <div className={`confirm-order ${pop ? "pop" : ""}`}>
      <img
        src={require("../../images/flower.svg")}
        alt=""
        className="flower-img"
      />
      <p>Thank you for Ordering! Your order total is $ {total}</p>

      <img
        src={require("../../images/flower.svg")}
        alt=""
        className="flower-img"
      />
    </div>
  );
};

export default PlaceOrder;
