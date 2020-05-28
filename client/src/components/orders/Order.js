import React, { useContext } from "react";
import OrderItem from "./OrderItem";

import OrderContext from "../../context/order/orderContext";

const Order = () => {
  const orderContext = useContext(OrderContext);

  const {
    orderProducts,
    total,
    clearCart,
    popPlaceOrder,
    addOrder,
  } = orderContext;

  const onClear = () => {
    clearCart();
    console.log("cleared");
  };

  const onSubmit = () => {
    if (total > 0 || orderProducts.length) {
      popPlaceOrder();
      addOrder(orderProducts, total);
    }

    console.log("submited pop");
  };

  return (
    <div className="order-card">
      <div className="order-title">
        Your Cart
        <div className="clear">
          <img
            src={require("../../images/trash.svg")}
            alt=""
            className="trash-img"
          />
          <p onClick={onClear}>Clear</p>
        </div>
      </div>

      {orderProducts.map((orderProduct) => (
        <OrderItem key={orderProduct._id} orderProduct={orderProduct} />
      ))}

      <div className="place-order">
        <input
          type="submit"
          value="Place Order"
          className="btn"
          onClick={onSubmit}
        />

        <span>Total : $ {total}</span>
      </div>
    </div>
  );
};

export default Order;
