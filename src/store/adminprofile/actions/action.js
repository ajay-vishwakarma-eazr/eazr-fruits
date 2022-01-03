import axios from "axios";
import { ip } from "../../../config/config";
import {
  FETCH_ADMIN_FAILURE,
  FETCH_ADMIN_PROFILE,
  FETCH_ADMIN_SUCCESS,
} from "./actiontypes";

export const FetchAdminRequest = () => {
  return {
    type: FETCH_ADMIN_PROFILE,
  };
};

export const FetchAdminSuccess = (users) => {
  return {
    type: FETCH_ADMIN_SUCCESS,
    payload: users,
  };
};

export const FetchAdminFailure = (error) => {
  return {
    type: FETCH_ADMIN_FAILURE,
    payload: error,
  };
};

export const FetchAdminProfile = () => {
  return function (dispatch) {
    dispatch(FetchAdminRequest);
    axios
      .get(`${ip}/admins/me`)
      .then((res) => {
        const users = res.data;
        dispatch(FetchAdminSuccess(users));
      })
      .catch((err) => {
        console.log(err);
        dispatch(FetchAdminFailure(err.message));
        // alert('No data found')
      });
  };
};
