import React from "react";
import Products from "../components/products/Products";
import Order from "../components/orders/Order";
import PlaceOrder from "./orders/PlaceOrder";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <PlaceOrder />
        <h3>Products Available</h3>
        <Products />
      </div>
      <div>
        <Order />
      </div>
    </div>
  );
};

export default Home;
