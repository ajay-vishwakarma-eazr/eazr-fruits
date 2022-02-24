// import {
//   FETCH_SETTLEMENT_FAILURE,
//   FETCH_SETTLEMENT_SUCCESS,
//   FETCH_SETTLEMENT_REQUEST,
//   GET_SEARCH_SETTLEMENTSPARTNERS,
//   GET_SEARCH_SETTLEMENTSPARTNERS_FAILED,
// } from "../actions/actiontypes";

// export const initialState = {
//   loading: false,
//   settlements: [],
//   search: [],
//   errror: "",
// };

// export const SettlementReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_SETTLEMENT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_SETTLEMENT_SUCCESS:
//       return {
//         loading: false,
//         settlements: action.payload,
//         error: "",
//       };
//     case FETCH_SETTLEMENT_FAILURE:
//       return {
//         error: action.payload,
//       };

//     case GET_SEARCH_SETTLEMENTSPARTNERS:
//       return {
//         ...state,
//         loading: false,
//         search: action.payload,
//       };
//     case GET_SEARCH_SETTLEMENTSPARTNERS_FAILED:
//       return {
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };


import {
  FETCH_SETTLEMENT_FAILURE,
  FETCH_SETTLEMENT_SUCCESS,
  FETCH_SETTLEMENT_REQUEST,
  SEARCH_SETTLEMENT,
  SEARCH_SETTLEMENT_FAILED,
} from "../actions/actiontypes";

export const initialState = {
  loading: false,
  settlements: [],
  errror: "",
  search: [],
};

export const SettlementReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SETTLEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SETTLEMENT_SUCCESS:
      return {
        loading: false,
        settlements: action.payload,
        error: "",
      };
    case FETCH_SETTLEMENT_FAILURE:
      return {
        error: action.payload,
      };
    case SEARCH_SETTLEMENT:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    case SEARCH_SETTLEMENT_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};