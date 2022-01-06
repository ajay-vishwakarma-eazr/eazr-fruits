import axios from "axios";
import { ip } from "../../../config/config";
import {
  FETCH_ADMIN_PROFILE,
  FETCH_CREDITDETAILS_FAILURE,
  FETCH_CREDITDETAILS_SUCCESS,
} from "./actiontypes";

export const CreditDetails = () => {
  return {
    type: FETCH_ADMIN_PROFILE,
  };
};

export const FetchCreditDetails = (users) => {
  return {
    type: FETCH_CREDITDETAILS_SUCCESS,
    payload: users,
  };
};

export const FetchCreditDetailsFailure = (error) => {
  return {
    type: FETCH_CREDITDETAILS_FAILURE,
    payload: error,
  };
};

export const FetchCreditDetail = () => {
  return function (dispatch) {
    dispatch(FetchAdminRequest);
    axios
      .get(`${ip}/admins/me`)
      .then((res) => {
        const users = res.data;
        dispatch(FetchCreditDetails(users));
      })
      .catch((err) => {
        console.log(err);
        dispatch(FetchCreditDetailsFailure(err.message));
        // alert('No data found')
      });
  };
};
