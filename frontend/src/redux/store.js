import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  detailProductsReducers,
  listProductsReducers,
} from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import {
  userRegisterReducer,
  userSignInReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMineReducer,
  orderPayReducer
} from "./reducers/orderReducers";

const reducer = combineReducers({
  listProductsReducers,
  detailProductsReducers,
  cartReducers,
  userSignInReducer,
  userRegisterReducer,
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMineReducer
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
