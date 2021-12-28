import {
  CHECK_LOGIN,
  LOGIN_USER_SUCCESSFUL,
  API_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGIN_LOADING,
  OTP_SENT,
  OTP_SENT_FAILED,
  LOGIN_USER_FAILED,
  SHOW_OTP_MODAL,
  HIDE_OTP_MODAL,
  VERIFY_LOADING,
  SET_CURRENT_USER,
} from "./actionTypes";
import axios from "axios";
import { ip } from "../../../config/config";
import setAuthToken from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { fetchModules } from "../../partnerModules/actions/actions";

export const checkLogin = (user, history) => {
  return {
    type: CHECK_LOGIN,
    payload: { user, history },
  };
};

export const login = (contactNumber) => {

  console.log(contactNumber);
  return (dispatch) => {
    dispatch(setLoginLoading());

    axios
      .post(`${ip}/admins/send-otp`, { contactNumber })
      .then((res) => {
        dispatch({
          type: OTP_SENT,
        });
      })
      .catch((err) => {
        dispatch({
          type: OTP_SENT_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const verify = (contactNumber, otp, history) => {
  return (dispatch) => {
    dispatch({
      type: VERIFY_LOADING,
    });

    axios

      .post(`${ip}/admins/verify-otp`, {
        contactNumber,
        otp,
      })


      .post(`${ip}/admins/verify-otp`, { contactNumber, otp })
     .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        //Set token to auth header
        setAuthToken(token);

        //Decode token to get user data

        // const decoded = jwt_decode(token);
        
        const decoded = jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY29udGFjdE51bWJlciI6Ijg5MjgzMzc3MzkiLCJ0aW1lc3RhbXAiOiIxNjQwNjc1NTk2MzQ0IiwiaWF0IjoxNjQwNjc1NTk2LCJleHAiOjE2NDkxNDI3OTZ9.RwelAgrcfTjHNV162lbqUy6hsCj3_29A0LXEhRZcbrY");
        dispatch(loginUserSuccessful(decoded));
        history.push("/dashboard");
        dispatch(fetchModules());
      })
      .catch((err) => {
        console.log(err);

        dispatch({
          type: LOGIN_USER_FAILED,
          payload: err,
        });
      });
  };
};

export const resend = (phone, otp) => {
  return (dispatch) => {
    dispatch(setLoginLoading());

    axios
      .post(`${ip}/admin/auth/resendotp`, { phone, otp })
      .then((res) => {
        dispatch({
          type: OTP_SENT,
        });
      })
      .catch((err) => {
        dispatch({
          type: OTP_SENT_FAILED,
          payload: err.response.data,
        });
      });
  };
};

//Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const loginUserSuccessful = (user) => {
  return {
    type: LOGIN_USER_SUCCESSFUL,
    payload: user,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const setLoginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const showOtpModal = () => {
  return {
    type: SHOW_OTP_MODAL,
  };
};

export const hideOtpModal = () => {
  return {
    type: HIDE_OTP_MODAL,
  };
};
