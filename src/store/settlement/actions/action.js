import {
  FETCH_SETTLEMENT_FAILURE,
  FETCH_SETTLEMENT_REQUEST,
  FETCH_SETTLEMENT_SUCCESS,
  PARTNERS_SETTLEMENTS_LOADING,
} from "./actiontypes";
import axios from "axios";
import { ip } from "../../../config/config";

export const FetchSettlementRequest = () => {
  return {
    type: FETCH_SETTLEMENT_REQUEST,
  };
};
export const FetchSettlementSuccess = (settlements) => {
  return {
    type: FETCH_SETTLEMENT_SUCCESS,
    payload: settlements,
  };
};

export const FetchSettlementFailure = (error) => {
  return {
    type: FETCH_SETTLEMENT_FAILURE,
    payload: error,
  };
};

export const fetchSettlements = () => {
  return function (dispatch) {
    dispatch(FetchSettlementRequest);
    axios
      .get(`${ip}/settlements`)
      .then((res) => {
        //const users=res.data.map(user=>user.id)
        const settlements = res.data;
        console.log(settlements);
        dispatch(FetchSettlementSuccess(settlements));
      })
      .catch((err) => {
        dispatch(FetchSettlementFailure(err.message));
      });
  };
};

export const setPartnersSettlementsLoading = (id) => {
  return {
    type: PARTNERS_SETTLEMENTS_LOADING,
  };
};

export const fetchSettlementsById = (id) => {
  return function (dispatch) {
    dispatch(FetchSettlementRequest);
    axios
      .get(`${ip}/settlements?filter=partnerId||eq||${id}`)
      .then((res) => {
        const settlements = res.data;
        dispatch(FetchSettlementSuccess(settlements));
      })
      .catch((err) => {
        dispatch(FetchSettlementFailure(err.message));
      });
  };
};
