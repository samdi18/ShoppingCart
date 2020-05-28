import React, { useContext, useEffect } from "react";
import OrderHistoryItem from "./OrderHistoryItem";

import OrderContext from "../../context/order/orderContext";

const OrderHistory = () => {
  const orderContext = useContext(OrderContext);

  const { getOrders, pastOrders } = orderContext;

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="order-history">
      {pastOrders &&
        pastOrders.map((pastOrder) => (
          <OrderHistoryItem key={pastOrder._id} pastOrder={pastOrder} />
        ))}
    </div>
  );
};

export default OrderHistory;
