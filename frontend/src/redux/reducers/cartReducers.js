import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../action-type";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
}
export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existingItem = state.cartItems.find((x) => (
                x.product === item.product
            ))
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => (x.product === item.product ? item : x))
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case  CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => (
                    x.product !== action.payload
                ))
            }
        default:
            return state
    }
}