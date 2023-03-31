import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CLEAR_ERRORS,
  GET_CART_ITEMS_FAIL,
  GET_CART_ITEMS_REQUEST,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEM_FAIL,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
} from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
    case GET_CART_ITEMS_REQUEST:
    case REMOVE_CART_ITEM_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    case GET_CART_ITEMS_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
      };
    case ADD_TO_CART_FAIL:
    case GET_CART_ITEMS_FAIL:
    case REMOVE_CART_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
