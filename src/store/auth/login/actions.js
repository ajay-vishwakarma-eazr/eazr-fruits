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
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER_LOADING,
  CLEAR_ERROR,
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
  return (dispatch) => {
    dispatch(setLoginLoading());

    axios
      .post(`${ip}/admins/send-otp`, { contactNumber })
      .then((res) => {
        dispatch({
          type: OTP_SENT,
          payload:res.data.message
        });
      })
      .catch((err) => {
        dispatch({
          type: OTP_SENT_FAILED,
          payload: err.data.message,
        });
      });
  };
};

export const register = (data) => {
  return (dispatch) => {
    dispatch(setLoginLoading());
    axios
      .post(`${ip}/admins`, data)
      .then((res) => {
        const { accessToken } = res.data.admin;
        const decoded = jwt_decode(accessToken);
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: decoded,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_FAILED,
          payload: err.response.data.message,
        });
      });
  };
};

export const verify = (contactNumber, otp, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${ip}/admins/verify-otp`, {
       contactNumber, otp 
      });
      if (res.data.admin !== null) {
        // console.log(res.data.message);
        const { accessToken } = res.data.admin;
        localStorage.setItem("accessToken", accessToken);
        //Set token to auth header
        setAuthToken(accessToken);

        //Decode token to get user data
        const decoded = jwt_decode(accessToken);
        dispatch(loginUserSuccessful(decoded));
        history.push("/dashboard");
        // dispatch(fetchModules());
      } else {
        throw res.data.message;
      }} catch (error) {
        dispatch ({
          type:LOGIN_USER_FAILED,
          payload:error
        });
      }
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
          payload: err.message,
        });
      });
  };
};

//Set logged in userloginUserSuccessful
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

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
