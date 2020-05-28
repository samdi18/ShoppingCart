import React from "react";
import moment from "moment";

const OrderHistoryItem = ({ pastOrder }) => {
  return (
    <div className="history-item">
      <p className="order-date">
        Ordered on {moment(pastOrder.date).format("DD/MM/YYYY")}
      </p>

      {pastOrder.orderProducts.map((item) => (
        <p className="items">
          <span className="name">{item.name}</span>{" "}
          <span className="qty"> Quantity: {item.quantity} </span>
          <span className="item-price">Price: $ {item.price} </span>
        </p>
      ))}

      <p className="grand-total">Grand Total: $ {pastOrder.total}</p>
    </div>
  );
};

export default OrderHistoryItem;
