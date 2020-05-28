import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import "./App.css";
import ProductState from "./context/product/ProductState";
import OrderState from "./context/order/OrderState";
import OrderHistory from "./components/orders/OrderHistory";

const App = () => {
  return (
    <ProductState>
      <OrderState>
        <Router>
          <Fragment>
            <Navbar title="ShoppingCart" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/orderHistory" component={OrderHistory} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </OrderState>
    </ProductState>
  );
};

export default App;
