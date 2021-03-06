import {
  CHECK_LOGIN,
  LOGIN_USER_SUCCESSFUL,
  API_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  OTP_SENT,
  OTP_SENT_FAILED,
  LOGOUT_USER_FAILED,
  LOGIN_LOADING,
  SHOW_OTP_MODAL,
  HIDE_OTP_MODAL,
  LOGIN_USER_FAILED,
  VERIFY_LOADING,
  SET_CURRENT_USER,
  SET_PARTNER_MODULES,
  CLEAR_ERROR,
} from "./login/actionTypes";
import { isEmpty } from "../../validations/isEmpty";

const initialState = {
  // loginError: "",
  isAuthenticated: false,
  // user: {},
  message: "",
  loading: false,
  verifyLoading: false,
  errors: {},
  showOtpModal: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case VERIFY_LOADING:
      return {
        ...state,
        errors: {},
        verifyLoading: true,
      };
    case SHOW_OTP_MODAL:
      return {
        ...state,
        loading: false,
        showOtpModal: true,
      };
    case HIDE_OTP_MODAL:
      return {
        ...state,
        loading: false,
        showOtpModal: false,
      };
    case OTP_SENT:
      return {
        ...state,
        loading: false,
        errors: action.payload,
        showOtpModal: true,
      };

    case OTP_SENT_FAILED:
      return {
        ...state,
        loading: false,
        showOtpModal: true,
        errors: action.payload,
      };

    case CHECK_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        verifyLoading: false,
        showOtpModal: false,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: isEmpty(action.payload) ? null : action.payload,
      };

    case LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        verifyLoading: false,
        showOtpModal:true,
        errors: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
      };

    case LOGOUT_USER_SUCCESS:
      return { ...state };
    case LOGOUT_USER_FAILED:
      return { ...state, loading: false, errors: action.payload };

    case API_ERROR:
      state = {
        ...state,
        loading: false,
        loginError: action.payload,
      };
      break;

    case CLEAR_ERROR:
      return {
        errors: [],
      };

    default:
      return { ...state };
  }
  return state;
};

export default login;
