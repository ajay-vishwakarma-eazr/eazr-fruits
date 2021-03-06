import {
  FETCH_TRANSACTION_FAILURE,
  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_SUCCESS,
  GET_TRANSACTION_BY_ID,
  GET_TRANSACTION_BY_ID_FAILED,
  PARTNERS_LOADING,
  GET_SEARCH_TRANSACTION,
  GET_SEARCH_TRANSACTION_FAILED,
  // GET_PARTNER_INITIATED_TRANSACTION_BY_ID,
  // GET_PARTNER_INITIATED_TRANSACTION_BY_ID_FAILED,
  // GET_PARTNER_INITIATED_SEARCH_TRANSACTION,
  // GET_PARTNER_INITIATED_SEARCH_TRANSACTION_FAILED,
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
      .get(`${ip}/transactions?id=sort,DESC`)
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

export const getTranscationById = (id, pageNumber) => {
  return (dispatch) => {
    dispatch(setPartnersLoading());
    axios
      .get(
        `${ip}/transactions?filter=partnerId||eq||${id}&page=${pageNumber}&limit=10&sort=id,DESC`
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
          payload: err.message,
        });
      });
  };
};

// export const getPartnerInitiatedTranscationById = (id, pageNumber) => {
//   return (dispatch) => {
//     dispatch(setPartnersLoading());
//     axios
//       .get(
//         `${ip}/transactions?filter=partnerId||eq||${id}&filter=status||eq||0&page=${pageNumber}&limit=10&sort=id,DESC`
//       )
//       .then((res) => {
//         dispatch({
//           type: GET_PARTNER_INITIATED_TRANSACTION_BY_ID,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: GET_PARTNER_INITIATED_TRANSACTION_BY_ID_FAILED,
//           payload: err.message,
//         });
//       });
//   };
// };

export const getTranscations = () => {
  return (dispatch) => {
    dispatch(setPartnersLoading());

    axios
      .get(`${ip}/transactions?filter=status||$eq||2`)
      .then((res) => {
        dispatch({
          type: GET_TRANSACTION_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_TRANSACTION_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getPartnerTranscationSearch = (id, search) => {
  return (dispatch) => {
    dispatch(setPartnersLoading());
    axios
      .get(
        `${ip}/transactions?s={"$and": [{"partnerId":{"$eq":${id}}},{"user.fullName": {"contL":"${search}"}}]}&sort=id,DESC`
      )
      .then((res) => {
        dispatch({
          type: GET_SEARCH_TRANSACTION,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_TRANSACTION_FAILED,
          payload: err.message,
        });
      });
  };
};

// export const getPartnerInitiatedTranscationSearch = (id, search) => {
//   return (dispatch) => {
//     dispatch(setPartnersLoading());
//     axios
//       .get(
//         `${ip}/transactions?s={"$and": [{"partnerId":{"$eq":${id}}},{"user.fullName": {"contL":"${search}"}}]}&filter=status||eq||0&sort=id,DESC`
//       )
//       .then((res) => {
//         dispatch({
//           type: GET_PARTNER_INITIATED_SEARCH_TRANSACTION,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: GET_PARTNER_INITIATED_SEARCH_TRANSACTION_FAILED,
//           payload: err.response.data,
//         });
//       });
//   };
// };

export const getUsersTranscationById = (id, pageNumber) => {
  return (dispatch) => {
    dispatch(setPartnersLoading());
    axios
      .get(
        `${ip}/transactions?filter=userId||eq||${id}&page=${pageNumber}&limit=10&sort=id,DESC`
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
          payload: err.message,
        });
      });
  };
};

export const getUsersSearchTranscation = (id, search, pageNumber) => {
  return (dispatch) => {
    dispatch(setPartnersLoading());
    axios
      .get(
        `${ip}/transactions?s={"$and": [{"userId":{"$eq":${id}}},{"partner.businessName": {"$contL":"${search}"}}]}&page=${pageNumber}&limit=10&sort=id,DESC`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_SEARCH_TRANSACTION,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_TRANSACTION_FAILED,
          payload: err.response.data,
        });
      });
  };
};
