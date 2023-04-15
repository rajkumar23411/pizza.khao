import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_NAME_FAIL,
  UPDATE_NAME_RESET,
  UPDATE_USER_NAME_REQUEST,
  UPDATE_USER_NAME_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
} from "../constants/userConstant";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case USER_LOAD_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case USER_LOAD_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_NAME_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_NAME_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_NAME_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false,
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
