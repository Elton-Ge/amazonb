import {
  CART_EMPTY,
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS, ORDER_LIST_MINE_FAILURE, ORDER_LIST_MINE_REQUEST, ORDER_LIST_MINE_SUCCESS, ORDER_PAY_FAILURE,
  ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS
} from "../action-type";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST });
  try {
    const token = getState().userSignInReducer.userInfo.token;
    const { data } = await axios.post("/api/orders", order, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST });
  try {
    const token = getState().userSignInReducer.userInfo.token;
    const { data } = await axios.get(`/api/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const payOrder = (order, paymentResult) => async (dispatch, getState) => {
  dispatch({ type: ORDER_PAY_REQUEST });
  try {
    const token = getState().userSignInReducer.userInfo.token;
    const { data } = await axios.put(`/api/orders/${order._id}/pay`,paymentResult, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  }catch (error) {
    dispatch({
      type: ORDER_PAY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export  const orderListMine = () =>async (dispatch, getState) =>{
  dispatch({type:ORDER_LIST_MINE_REQUEST})
  try{
    const token = getState().userSignInReducer.userInfo.token;
    const { data } = await axios.get(`/api/orders/mine`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type: ORDER_LIST_MINE_SUCCESS, payload: data });
  }catch (error) {
    dispatch({
      type: ORDER_LIST_MINE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
}
