import axios from "axios";
import { config } from "../../utils";
import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CLEAR_ERRORS,
  GET_CART_ITEMS_FAIL,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEM_FAIL,
  REMOVE_CART_ITEM_SUCCESS,
} from "../constants/cartConstant";

export const addToCart = (productId, quantity, size) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/add_to_cart",
      { productId, quantity, size },
      config
    );
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_TO_CART_FAIL, payload: error.response.data.message });
  }
};

export const getCartItems = () => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART_REQUEST });

    const { data } = await axios.get("/api/my/cart", config);

    dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: data.cart });
  } catch (error) {
    dispatch({
      type: GET_CART_ITEMS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const removeCartItem = (product) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/cart`, product, config);

    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: REMOVE_CART_ITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};