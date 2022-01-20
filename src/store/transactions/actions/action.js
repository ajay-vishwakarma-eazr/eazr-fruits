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

export const setPartnersLoading = (id) => {
  return {
    type: PARTNERS_LOADING,
  };
};

export const getTranscationById = (id) => {
  return (dispatch) => {
    dispatch(setPartnersLoading());
    axios
      .get(`${ip}/transactions?filter=partnerId||eq||${id}`)
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

export const getTranscationSearch = (id, search) => {
  return (dispatch) => {
    dispatch(setPartnersLoading());
    axios
      .get(
        `${ip}/transactions?filter=partnerId||eq||${id}`
        // &filter=user.fullName||$eq||{searcheData}`
      )
      .then((res) => {
        dispatch({
          type: GET_TRANSACTION_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_TRANSACTION_BY_ID_FAILED,
          payload: err.response.data,
        });
      });
  };
};

// export const getTranscationById = (id, search) => {
//   return (dispatch) => {
//     dispatch(setPartnersLoading());
//     if (search != "") {
//       let bool = isNaN(Number(search));
//
//       let url = bool
//         ? `${ip}/transactions?filter=partnerId||eq||${id}&filter=user.fullName||$contL||${search}&or=user.email||$contL||${search}`
//         : `${ip}/transactions?filter=partnerId||eq||${id}&filter=user.fullName||$contL||${search}&or=user.email||$contL||${search}&or=amount||$eq||${String(
//             search
//           )}`;
//       axios
//         .get(url)
//         .then((res) => {
//
//           dispatch({
//             type: GET_TRANSACTION_BY_ID,
//             payload: res.data,
//           });
//         })
//         .catch((err) => {
//           console.log(err.response.data);
//
//           dispatch({
//             type: GET_TRANSACTION_BY_ID_FAILED,
//             payload: err.response.data,
//           });
//         });
//     } else {
//
//       axios
//         .get(`${ip}/transactions?filter=partnerId||eq||${id}`)
//         .then((res) => {
//
//           dispatch({
//             type: GET_TRANSACTION_BY_ID,
//             payload: res.data,
//           });
//         })
//         .catch((err) => {
//           console.log(err.response.data);
//
//           dispatch({
//             type: GET_TRANSACTION_BY_ID_FAILED,
//             payload: err.response.data,
//           });
//         });
//     }
//   };
// };

export const getUsersTranscationById = (id) => {
  return (dispatch) => {
    dispatch(setPartnersLoading());
    axios
      .get(`${ip}/transactions?filter=userId||eq||${id}`)
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
