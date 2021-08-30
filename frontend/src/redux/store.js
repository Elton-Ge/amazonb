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

const reducer = combineReducers({
  listProductsReducers,
  detailProductsReducers,
  cartReducers,
  userSignInReducer,
  userRegisterReducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
