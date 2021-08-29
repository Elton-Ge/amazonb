import {
    PRODUCT_DETAIL_FAILURE,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_LIST_SUCCESS
} from "../action-type";

const initialState = {loading: true, products: []}
export const listProductsReducers = (state = initialState, action) => {
    switch (action.type) {
        // case PRODUCT_LIST_REQUEST:
        //     return {loading: true}
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCT_LIST_FAILURE:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const detailProductsReducers = (state = {loading: true, product: {}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAIL_FAILURE:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}