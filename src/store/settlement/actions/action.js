// import {
//   FETCH_SETTLEMENT_FAILURE,
//   FETCH_SETTLEMENT_REQUEST,
//   FETCH_SETTLEMENT_SUCCESS,
//   PARTNERS_SETTLEMENTS_LOADING,
//   GET_SEARCH_SETTLEMENTSPARTNERS,
//   GET_SEARCH_SETTLEMENTSPARTNERS_FAILED,
// } from "./actiontypes";
// import axios from "axios";
// import { ip } from "../../../config/config";
// export const FetchSettlementRequest = () => {
//   return {
//     type: FETCH_SETTLEMENT_REQUEST,
//   };
// };
// export const FetchSettlementSuccess = (settlements) => {
//   return {
//     type: FETCH_SETTLEMENT_SUCCESS,
//     payload: settlements,
//   };
// };

// export const FetchSettlementFailure = (error) => {
//   return {
//     type: FETCH_SETTLEMENT_FAILURE,
//     payload: error,
//   };
// };

// export const fetchSettlements = () => {
//   return function (dispatch) {
//     dispatch(FetchSettlementRequest);
//     axios
//       .get(`${ip}/settlements?id=sort,DESC`)
//       .then((res) => {
//         //const users=res.data.map(user=>user.id)
//         const settlements = res.data;
//         console.log(settlements);
//         dispatch(FetchSettlementSuccess(settlements));
//       })
//       .catch((err) => {
//         dispatch(FetchSettlementFailure(err.message));
//       });
//   };
// };

// export const setPartnersSettlementsLoading = (id) => {
//   return {
//     type: PARTNERS_SETTLEMENTS_LOADING,
//   };
// };

// export const fetchSettlementsById = (id, pageNumber) => {
//
//   return function (dispatch) {
//     dispatch(FetchSettlementRequest);
//     axios
//       .get(
//         `${ip}/settlements?filter=partnerId||eq||${id}&page=${pageNumber}&limit=10&sort=id,DESC`
//       )
//       .then((res) => {
//
//         console.log(res.data);
//         const settlements = res.data;
//         dispatch(FetchSettlementSuccess(settlements));
//       })
//       .catch((err) => {
//
//         dispatch(FetchSettlementFailure(err.message));
//       });
//   };
// };

// export const fetchSearchSettlements = (id, search) => {
//   return function (dispatch) {
//     dispatch(FetchSettlementRequest);
//     axios
//       .get(
//         `${ip}/settlements?s={"$and": [{"partnerId":{"$eq":${id}}},{"partner.businessName": {"$starts":"${search}"}}]}`
//       )
//       .then((res) => {
//
//         console.log(res.data);
//         dispatch({
//           type: GET_SEARCH_SETTLEMENTSPARTNERS,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//
//         dispatch({
//           type: GET_SEARCH_SETTLEMENTSPARTNERS_FAILED,
//           payload: err,
//         });
//       });
//   };
// };

import {
  FETCH_SETTLEMENT_FAILURE,
  FETCH_SETTLEMENT_REQUEST,
  FETCH_SETTLEMENT_SUCCESS,
  PARTNERS_SETTLEMENTS_LOADING,
  SEARCH_SETTLEMENT,
  SEARCH_SETTLEMENT_FAILED,
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
      .get(`${ip}/settlements?sort=id,DESC`)
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

export const fetchSettlementsById = (id, pageNumber) => {
  return function (dispatch) {
    dispatch(FetchSettlementRequest);
    axios
      .get(
        `${ip}/settlements?filter=partnerId||eq||${id}&page=${pageNumber}&limit=10&sort=id,DESC`
      )
      .then((res) => {
        const settlements = res.data;
        dispatch(FetchSettlementSuccess(settlements));
      })
      .catch((err) => {
        dispatch(FetchSettlementFailure(err.message));
      });
  };
};

export const searchPartnerSettlements = (id, search) => {
  return function (dispatch) {
    dispatch(FetchSettlementRequest);
    axios
      .get(
        `${ip}/settlements?s={"$and": [{"partnerId":{"$eq": ${id}}}, {"partner.businessName": {"$starts": "${search}"}}]}`
      )
      .then((res) => {
        dispatch({ type: SEARCH_SETTLEMENT, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: SEARCH_SETTLEMENT_FAILED,
          payload: err.response.data,
        });
      });
  };
};
