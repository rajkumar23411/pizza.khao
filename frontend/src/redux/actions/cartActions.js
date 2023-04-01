import axios from "axios";
import { config } from "../../utils";
import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  CLEAR_ERRORS,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM,
} from "../constants/cartConstant";

export const addToCart = (productId, quantity, size) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/add_to_cart",
      { productId, quantity, size },
      config
    );
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getCartItems = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/my/cart", config);
    dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: data.cart,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteCartItem = (productId, size) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/cart/delete`,
      { productId, size },
      config
    );

    dispatch({
      type: REMOVE_CART_ITEM,
      payload: data.success,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCart = (productId, quantity, size) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/api/update/cart`,
      { productId, quantity, size },
      config
    );
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: data.isUpdated,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
