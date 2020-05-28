import {
  GET_ORDERS,
  ADD_ORDER,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  POP_PLACE_ORDER,
  REMOVE_POP,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
      };
    // case ADD_ORDER:
    //   return {
    //     ...state,
    //     order: [action.payload],

    //   };
    case ADD_TO_CART:
      //check if the action id exists in the orderedProducts
      let existed_item = state.orderProducts.filter(
        (item) => item._id === action.payload._id
      );

      if (existed_item.length) {
        let other_items = state.orderProducts.filter(
          (item) => item._id !== action.payload._id
        );

        const updated_item = {
          ...existed_item[0],
          quantity: existed_item[0].quantity + 1,
        };

        return {
          ...state,
          orderProducts: [...other_items, updated_item],
          total: state.total + updated_item.price,
        };
      } else {
        return {
          ...state,
          orderProducts: [...state.orderProducts, action.payload],
          total: state.total + action.payload.price,
        };
      }

    case DELETE_FROM_CART:
      const newTotal =
        state.total - action.payload.price * action.payload.quantity;
      return {
        ...state,
        orderProducts: state.orderProducts.filter(
          (item) => item._id !== action.payload._id
        ),
        total: newTotal > 0 ? newTotal : 0,
      };

    case CLEAR_CART:
      return {
        ...state,
        orderProducts: [],
        total: 0,
      };

    case INCREASE_QTY:
      //check if the action id exists in the orderedProducts
      let exist_item = state.orderProducts.filter(
        (item) => item._id === action.payload
      );

      if (exist_item.length) {
        let other_items = state.orderProducts.filter(
          (item) => item._id !== action.payload
        );

        const updated_item = {
          ...exist_item[0],
          quantity: exist_item[0].quantity + 1,
        };

        return {
          ...state,
          orderProducts: [...other_items, updated_item],
          total: state.total + updated_item.price,
        };
      } else {
        return {
          ...state,
        };
      }

    case DECREASE_QTY:
      //check if the action id exists in the orderedProducts
      let exist = state.orderProducts.filter(
        (item) => item._id === action.payload
      );

      if (exist.length) {
        let other_items = state.orderProducts.filter(
          (item) => item.id !== action.payload
        );

        const newQuantity = exist[0].quantity - 1;

        const updated_item = {
          ...exist[0],
          quantity: newQuantity > 0 ? newQuantity : 0,
        };

        const newTotal = state.total - updated_item.price;

        return {
          ...state,
          orderProducts: [...other_items, updated_item],
          total: newTotal >= 0 ? newTotal : 0,
        };
      } else {
        return {
          ...state,
        };
      }

    case POP_PLACE_ORDER:
      return {
        ...state,
        pop: true,
      };

    case REMOVE_POP:
      return {
        ...state,
        orderProducts: [],
        total: 0,
        pop: false,
      };

    default:
      return state;
  }
};
