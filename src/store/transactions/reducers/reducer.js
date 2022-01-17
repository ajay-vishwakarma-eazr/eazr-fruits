import {
  FETCH_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_REQUEST,
  FETCH_TRANSACTION_FAILURE,
  PARTNERS_LOADING,
  GET_TRANSACTION_BY_ID,
  GET_TRANSACTION_BY_ID_FAILED,
} from "../actions/actiontypes";

export const initialState = {
  loading: false,
  transactions:null,
  errror: "",
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTNERS_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case FETCH_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
        error: null,
      };
    case FETCH_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
        transactions: [],
        error: action.payload,
      };
    case GET_TRANSACTION_BY_ID:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
        errors: null,
      };
    case GET_TRANSACTION_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
