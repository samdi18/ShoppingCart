import React, { useReducer } from "react";
import axios from "axios";
import OrderContext from "./orderContext";
import orderReducer from "./orderReducer";
import {
  ADD_ORDER,
  ORDER_ERROR,
  GET_ORDERS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  POP_PLACE_ORDER,
  REMOVE_POP,
} from "../types";

const OrderState = (props) => {
  const initialState = {
    orderProducts: [],
    total: 0,
    pastOrders: [],
    pop: false,
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  // Get Orders to display on the orderhistory page
  const getOrders = async () => {
    try {
      const res = await axios.get("/api/order");

      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ORDER_ERROR,
        payload: err.response,
      });
    }
  };

  //Add Orders to the database when clicked on submit of place order
  const addOrder = async (orderProducts, total) => {
    const order = { orderProducts, total };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/order", order, config);
    } catch (err) {
      dispatch({
        type: ORDER_ERROR,
        payload: err.response,
      });
    }
  };

  //Add to Cart
  const addToCart = (product) => {
    const data = { ...product, quantity: 1 };
    dispatch({ type: ADD_TO_CART, payload: data });
  };

  //Delete an item from the cart
  const deleteFromCart = (product) => {
    dispatch({ type: DELETE_FROM_CART, payload: product });
  };

  //Clear the entire cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  //Increase cart item quantity
  const increaseQty = (id) => {
    dispatch({ type: INCREASE_QTY, payload: id });
  };

  //Decrease cart item quantity
  const decreaseQty = (id) => {
    dispatch({ type: DECREASE_QTY, payload: id });
  };

  const popPlaceOrder = () => {
    console.log("hello pop");
    dispatch({ type: POP_PLACE_ORDER });

    setTimeout(() => dispatch({ type: REMOVE_POP }), 5000);
  };

  return (
    <OrderContext.Provider
      value={{
        orderProducts: state.orderProducts,
        total: state.total,
        pastOrders: state.pastOrders,
        pop: state.pop,
        getOrders,
        addOrder,
        addToCart,
        deleteFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
        popPlaceOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
