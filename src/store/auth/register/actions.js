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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk5LCJjb250YWN0TnVtYmVyIjoiODkyODMzNzczOSIsInRpbWVzdGFtcCI6IjE2NDkxNTU2MjA5ODMiLCJpYXQiOjE2NDkxNTU2MjAsImV4cCI6MTY1NzYyMjgyMH0.Z_Lgx9urFOKrvq8azBIGOp7VFVlU2-P4_UtV8JJdh98",
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
