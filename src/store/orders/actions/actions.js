import {
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
} from "./actiontypes";
import axios from "axios";
import { ip } from "../../../config/config";

export const FetchOrderRequest = () => {
  return {
    type: FETCH_ORDER_REQUEST,
  };
};
export const FetchOrderSuccess = (orders) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload: orders,
  };
};

export const FetchOrderFailure = (error) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error,
  };
};

export const fetchOrders = () => {
  return function (dispatch) {
    dispatch(FetchOrderRequest);
    axios
      .get(`${ip}/admin/orders/orders`)
      .then((res) => {
        //const users=res.data.map(user=>user.id)
        const users = res.data;
        console.log(users);
        dispatch(FetchOrderSuccess(users));
      })
      .catch((err) => {
        dispatch(FetchOrderFailure(err.message));
      });
  };
};
