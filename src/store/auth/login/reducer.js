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
} from "./actionTypes";

const initialState = {
  loginError: "a",
  message: null,
  loading: false,
  errors: null,
  showOtpModal: false,
  isAuthenticated : false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };

    case OTP_SENT:
      return {
        ...state,
        loading: false,
        errors: null,
        showOtpModal: true,
      };

    case OTP_SENT_FAILED:
      return {
        ...state,
        loading: false,
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
        isAuthenticated : true,
        user : action.payload.user
      };

    case LOGOUT_USER:
      return { ...state };

    case LOGOUT_USER_SUCCESS:
      return { ...state };

    case API_ERROR:
      return {
        ...state,
        loading: false,
        loginError: action.payload,
      };

    default:
      return { ...state };
  }
  return state;
};

export default login;
