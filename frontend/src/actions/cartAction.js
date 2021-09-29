import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstant";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      desc: data.description,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};