import {
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MINE_FAILURE,
  ORDER_LIST_MINE_REQUEST,
  ORDER_LIST_MINE_SUCCESS,
  ORDER_PAY_FAILURE,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from "../action-type";

const initialState = {};
export const orderCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        order: action.payload,
        success: true,
        loading: false,
      };
    case ORDER_CREATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const orderDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAILURE:
      return { loading: false, error: action.payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMineReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_MINE_REQUEST:
      return { loading: true };
    case ORDER_LIST_MINE_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_MINE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
