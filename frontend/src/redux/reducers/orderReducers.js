import {
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
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
        message: action.payload,
        loading: false,
      };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
