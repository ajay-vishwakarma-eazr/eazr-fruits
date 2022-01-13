import {
  FETCH_ALL_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_LOADING,
} from "./actiontypes";

import axios from "axios";
import { ip } from "../../../config/config";

export const FetchAllTickets = () => {
  return {
    type: FETCH_ALL_TICKETS,
  };
};

export const FetchTicketsSuccess = (tickets) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
    payload: tickets,
  };
};

export const FetchTicketsFailure = (error) => {
  return {
    type: FETCH_TICKETS_FAILURE,
    payload: error,
  };
};

export const fetchTickets = () => {
  return function (dispatch) {
    dispatch(FetchAllTickets);
    axios
      .get(`${ip}/support-tickets`)
      .then((res) => {
        const tickets = res.data;
        console.log(tickets);
        dispatch(FetchTicketsSuccess(tickets));
      })
      .catch((err) => {
        dispatch(FetchTicketsFailure(err.message));
      });
  };
};

export const FetchTicketsLoading = (error) => {
  return {
    type: FETCH_TICKETS_LOADING,
    payload: error,
  };
};
