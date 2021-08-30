import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../action-type";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducers.cartItems)
  );
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducers.cartItems)
  );
};
