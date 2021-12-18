import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./actiontypes";
import axios from "axios";
import { ip } from "../../../config/config";

export const FetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};
export const FetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

export const FetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};
export const fetchProducts = () => {
  return function (dispatch) {
    dispatch(FetchProductRequest);
    axios
      .get(`${ip}/admin/products/products`)
      .then((res) => {
        //const users=res.data.map(user=>user.id)
        const products = res.data;
        console.log(products);
        dispatch(FetchProductSuccess(products));
      })
      .catch((err) => {
        dispatch(FetchProductFailure(err.message));
      });
  };
};
