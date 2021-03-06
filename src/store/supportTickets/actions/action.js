import {
  FETCH_ALL_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_LOADING,
  COMMENTS_LOADING,
  ADD_COMMENT_FAILED,
  ADD_COMMENT,
  GET_COMMENT_BY_ID_FAILED,
  GET_COMMENT_BY_ID,
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

export const fetchTickets = (pageNumber) => {
  return function (dispatch) {
    dispatch(FetchAllTickets);
    axios
      .get(`${ip}/support-tickets?page=${pageNumber}&limit=10`)
      .then((res) => {
        const tickets = res.data;
        dispatch(FetchTicketsSuccess(tickets));
      })
      .catch((err) => {
        dispatch(FetchTicketsFailure(err.message));
      });
  };
};

export const fetchNewTickets = (pageNumber) => {
  return function (dispatch) {
    dispatch(FetchAllTickets);
    axios
      .get(
        `${ip}/support-tickets?filter=status||eq||0&page=${pageNumber}&limit=10`
      )
      .then((res) => {
        const tickets = res.data;
        dispatch(FetchTicketsSuccess(tickets));
      })
      .catch((err) => {
        dispatch(FetchTicketsFailure(err.message));
      });
  };
};

export const fetchOpenTickets = (pageNumber) => {
  return function (dispatch) {
    dispatch(FetchAllTickets);
    axios
      .get(
        `${ip}/support-tickets?filter=status||eq||1&page=${pageNumber}&limit=10`
      )
      .then((res) => {
        const tickets = res.data;
        dispatch(FetchTicketsSuccess(tickets));
      })
      .catch((err) => {
        dispatch(FetchTicketsFailure(err.message));
      });
  };
};

export const fetchClosedTickets = (pageNumber) => {
  return function (dispatch) {
    dispatch(FetchAllTickets);
    axios
      .get(
        `${ip}/support-tickets?filter=status||eq||2&page=${pageNumber}&limit=10`
      )
      .then((res) => {
        const tickets = res.data;
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

export const FetchCommentsById = (id) => {
  return (dispatch) => {
    dispatch({ type: COMMENTS_LOADING });
    axios
      .get(`${ip}/support-comments?filter=supportTicketId||$eq||${id}`)
      .then((res) => {
        dispatch({ type: GET_COMMENT_BY_ID, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: GET_COMMENT_BY_ID_FAILED,
          payload: err,
        });
      });
  };
};
export const addComments = (id, newComment) => (dispatch) => {
  axios.post(`${ip}/support-comments`, newComment);
  axios
    .get(`${ip}/support-comments?filter=supportTicketId||$eq||${id}`)
    .then((res) => {
      console.log("ress.data", res.data);

      dispatch({ type: GET_COMMENT_BY_ID, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_COMMENT_BY_ID_FAILED,
        payload: err,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_COMMENT_FAILED,
        payload: err,
      });
    });
};

// export const addComments = (newComment) => (dispatch) => {
//   axios
//     .post(`${ip}/support-comments`, newComment)
//     .then((res) => {
//       dispatch({ type: ADD_COMMENT, payload: res.data });
//     })
//     .catch((err) => {
//       dispatch({
//         type: ADD_COMMENT_FAILED,
//         payload: err,
//       });
//     });
// };
