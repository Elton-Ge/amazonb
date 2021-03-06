import {
  PRODUCT_DETAIL_FAILURE,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_SUCCESS,
} from "../action-type";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  // dispatch({
  //     type: PRODUCT_LIST_REQUEST
  // })
  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
  }
};

export const detailProducts = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
