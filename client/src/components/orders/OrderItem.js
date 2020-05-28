import React, { useContext } from "react";

import OrderContext from "../../context/order/orderContext";

const OrderItem = ({ orderProduct }) => {
  const orderContext = useContext(OrderContext);

  const { deleteFromCart, increaseQty, decreaseQty } = orderContext;

  const handleClick = () => {
    deleteFromCart(orderProduct);
  };

  const onDecrease = () => {
    decreaseQty(orderProduct._id);

    console.log("decrease");
  };

  const onIncrease = () => {
    increaseQty(orderProduct._id);
  };
  return (
    <div className="order-item">
      <p className="order-name">{orderProduct.name}</p>

      <div className="quantity">
        <img
          src={require("../../images/decrease.svg")}
          alt=""
          className="decrease-img"
          onClick={onDecrease}
        />

        <p>{orderProduct.quantity}</p>
        <img
          src={require("../../images/increase.svg")}
          alt=""
          className="increase-img"
          onClick={onIncrease}
        />
      </div>

      <p>$ {orderProduct.price}</p>
      <img
        src={require("../../images/close.svg")}
        alt=""
        className="cross-img"
        onClick={handleClick}
      />
    </div>
  );
};

export default OrderItem;
