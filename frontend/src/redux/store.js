import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {detailProductsReducers, listProductsReducers} from "./reducers/productReducers";

const reducer = combineReducers({
    listProductsReducers,detailProductsReducers
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store