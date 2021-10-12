import {
  CART_GET_ITEM_FAIL,
  CART_GET_ITEM_REQUEST,
  CART_GET_ITEM_SUCCESS,
} from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_GET_ITEM_REQUEST:
      return { loading: true, cartItems: [] };
    case CART_GET_ITEM_SUCCESS:
      return { loading: false, cartItems: action.payload };
    case CART_GET_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
