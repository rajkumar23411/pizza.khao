import axios from "axios";
import { config } from "../../utils/index";
import {
  ADD_NEW_ADDRESS_FAIL,
  ADD_NEW_ADDRESS_REQUEST,
  ADD_NEW_ADDRESS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_ADDRESS_FAIL,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  GET_ALL_ADDRESS_FAIL,
  GET_ALL_ADDRESS_REQUEST,
  GET_ALL_ADDRESS_SUCCESS,
} from "../constants/addressConstant";

export const addAddress =
  (name, contact, pinCode, address, city, state, landMark, alternatContact) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADD_NEW_ADDRESS_REQUEST });

      const { data } = await axios.post(
        "/api/address/add",
        {
          name,
          contact,
          pinCode,
          address,
          city,
          state,
          landMark,
          alternatContact,
        },
        config
      );
      dispatch({
        type: ADD_NEW_ADDRESS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_NEW_ADDRESS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const myAddresses = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ADDRESS_REQUEST });
    const { data } = await axios.get("/api/address", config);
    dispatch({
      type: GET_ALL_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteAddress = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ADDRESS_REQUEST });

    const { data } = await axios.post("/api/addess/delete", id, config);

    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
