import {
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_LOADING,
  REGISTER_ADMIN_FAILED,
} from "./actionTypes";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { ip } from "../../../config/config";
import setAuthToken from "../../../utils/setAuthToken";

export const registerUserLoading = () => {
  return {
    type: REGISTER_ADMIN_LOADING,
  };
};
export const registerUserSuccess = (register) => {
  return (dispatch) => {
    axios
      .post(`${ip}/admins`, register, {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY29udGFjdE51bWJlciI6Ijg5MjgzMzc3MzkiLCJ0aW1lc3RhbXAiOiIxNjQwNjc1NTk2MzQ0IiwiaWF0IjoxNjQwNjc1NTk2LCJleHAiOjE2NDkxNDI3OTZ9.RwelAgrcfTjHNV162lbqUy6hsCj3_29A0LXEhRZcbrY",
        },
      })
      .then((res) => {
        // const { accessToken } = res.data.admin;
        // console.log(accessToken);
        // setAuthToken(accessToken);
        // const decoded = jwt_decode(accessToken);
        dispatch({
          type: REGISTER_ADMIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_ADMIN_FAILED,
          payload: err.response?.data.message,
        });
      });
  };
};
