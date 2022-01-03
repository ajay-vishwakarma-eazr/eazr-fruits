import {
  FETCH_TRANSACTION_FAILURE,
  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_SUCCESS,
  GET_TRANSACTION_BY_ID,
  GET_TRANSACTION_BY_ID_FAILED,
  PARTNERS_LOADING,
} from "./actiontypes";
import axios from "axios";
import { ip } from "../../../config/config";

export const FetchTransactionRequest = () => {
  return {
    type: FETCH_TRANSACTION_REQUEST,
  };
};
export const FetchTransactionSuccess = (transaction) => {
  return {
    type: FETCH_TRANSACTION_SUCCESS,
    payload: transaction,
  };
};

export const FetchTransactionFailure = (error) => {
  return {
    type: FETCH_TRANSACTION_FAILURE,
    payload: error,
  };
};

export const fetchTransactions = () => {
  return function (dispatch) {
    dispatch(FetchTransactionRequest);
    axios
      .get(`${ip}/transactions`)
      .then((res) => {
        const transactions = res.data;
        console.log(transactions);
        dispatch(FetchTransactionSuccess(transactions));
      })
      .catch((err) => {
        dispatch(FetchTransactionFailure(err.message));
      });
  };
};


export const setPartersLoading = () => {
  return {
    type: PARTNERS_LOADING,
  };
};

export const getTranscationById = (id) => {
  return (dispatch) => {
    dispatch(setPartersLoading());
    axios
      .get(`${ip}/transactions/${id}`)
      .then((res) => {
        dispatch({
          type: GET_TRANSACTION_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: GET_TRANSACTION_BY_ID_FAILED,
          payload: err.response.data,
        });
      });
  };
};