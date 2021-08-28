import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {listProductsReducers} from "./reducers/productReducers";

const reducer = combineReducers({
    listProductsReducers
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store