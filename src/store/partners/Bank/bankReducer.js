import {
  GET_BANK_DETAILS,
  GET_BANK_DETAILS_FAILED,
  UPDATE_BANK,
  UPDATE_BANK_FAILED,
  BANK_LOADING,
  CLEAR_BANK_DETAILS,
} from "./type";

const initialState = {
  loading: false,
  error: null,
  bank: [],
};
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case BANK_LOADING:
      return {
        ...state,
        loading: true,
        // bank: [],
      };

      case CLEAR_BANK_DETAILS :
        return {
          bank:[]
        }

    case GET_BANK_DETAILS:
      return {
        ...state,
        bank: action.payload,
        error: null,
        loading: false,
      };
    case GET_BANK_DETAILS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_BANK:
      return {
        ...state,
        loading:false,
        bank: action.payload,
      };

    case UPDATE_BANK_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
