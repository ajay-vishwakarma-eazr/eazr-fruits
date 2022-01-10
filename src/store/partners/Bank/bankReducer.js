import { GET_BANK_DETAILS, GET_BANK_DETAILS_FAILED } from "./type";

const initialState = {
  errors: null,
  bank: [],
};
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANK_DETAILS:
      return {
        ...state,
        bank: action.payload,
        error: null,
      };
    case GET_BANK_DETAILS_FAILED:
      return {
        ...state,
        error:action.payload,
      };
    default:
      return{...state};
  }
};