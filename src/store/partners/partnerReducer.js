import {
  GET_PARTNERS,
  GET_PARTNERS_FAILED,
  GET_PARTNER_BY_ID,
  GET_PARTNER_BY_ID_FAILED,
  CHANGE_PARTNER_STATUS,
  CHANGE_PARTNER_STATUS_FAILED,
  PARTNERS_LOADING,
  ADD_TICKET,
  CLEAR_ERRORS,
  GET_APPROVED_PARTNERS,
  GET_APPROVED_PARTNERS_FAILED,
  GET_PARTNERS_TRANSACTION_BY_ID,
  GET_PARTNERS_TRANSACTION_BY_ID_FAILED,
} from "./types";

const initialState = {
  partners: null,
  approvedPartners: null,
  partner: null,
  loading: false,
  errors: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case PARTNERS_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case GET_PARTNERS:
      return {
        ...state,
        partners: action.payload,
        errors: null,
        loading: false,
      };
    case GET_PARTNERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case GET_PARTNER_BY_ID:
      return {
        ...state,
        loading: false,
        partner: action.payload,
        errors: null,
      };
    case GET_PARTNER_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case GET_PARTNERS_TRANSACTION_BY_ID:
      return {
        ...state,
        loading: false,
        partner: action.payload,
        errors: null,
      };
    case GET_PARTNERS_TRANSACTION_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case CHANGE_PARTNER_STATUS:
      return {
        ...state,
        loading: false,
        errors: null,
      };

    case CHANGE_PARTNER_STATUS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ADD_TICKET:
      return {
        ...state,
        loading: false,
        partner: action.payload,
      };

    case GET_APPROVED_PARTNERS:
      return {
        ...state,
        approvedPartners: action.payload,
        loading: false,
      };
    case GET_APPROVED_PARTNERS_FAILED:
      return {
        ...state,
        approvedPartners: null,
        loading: false,
        errors: action.payload,
      };

    default:
      return { ...state };
  }
};

export default login;
