import axios from "axios";
import {
  CART_GET_ITEM_REQUEST,
  CART_GET_ITEM_SUCCESS,
  CART_GET_ITEM_FAIL,
} from "../constants/cartConstant";

export const listCart = (user) => async (dispatch) => {
  try {
    dispatch({ type: CART_GET_ITEM_REQUEST });
    const { data } = await axios.get(`/api/cart/usercart`);
    dispatch({ type: CART_GET_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CART_GET_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
