import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  CLEAR_ERRORS,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM,
} from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case GET_CART_ITEMS_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        loading: false,
        success: true,
        ...state,
      };
    case ADD_TO_CART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_CART_ITEM:
      return {
        loading: false,
        isUpdated: action.payload,
        ...state,
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        loading: false,
        success: action.payload,
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
