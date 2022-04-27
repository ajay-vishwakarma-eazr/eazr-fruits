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
  GET_PARTNER_TYPE,
  GET_PARTNER_TYPE_FAILED,
  GET_PARTNER_CATEGORY_TYPE,
  GET_PARTNER_CATEGORY_TYPE_FAILED,
  PARTNER_CATEGORY_TYPE,
  PARTNER_CATEGORY_TYPE_FAILED,
  GET_SEARCH_APPROVEDPARTNERS,
  GET_SEARCH_APPROVEDPARTNERS_FAILED,
  GET_SEARCH_ONBOARDINGPARTNERS,
  GET_SEARCH_ONBOARDINGPARTNERS_FAILED,
  CLEAR_PARTNER,
} from "./types";

const initialState = {
  partners: null,
  approvedPartners: null,
  partner: null,
  partnerType: [],
  partnerCategory: [],
  loading: false,
  errors: null,
  searchPartner:[]
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case PARTNERS_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case CLEAR_PARTNER:
      return {
       partner:[]
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
        errors: action.payload,
      };

    case GET_PARTNER_TYPE:
      return {
        ...state,
        loading: false,
        partnerType: action.payload,
        errors: null,
      };
    case GET_PARTNER_TYPE_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case PARTNER_CATEGORY_TYPE:
      return {
        ...state,
        loading: false,
        partnerCategory: action.payload,
        errors: null,
      };
    case PARTNER_CATEGORY_TYPE_FAILED:
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

    case GET_SEARCH_APPROVEDPARTNERS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case GET_SEARCH_APPROVEDPARTNERS_FAILED:
      return {
        error: action.payload,
      };

    case GET_SEARCH_ONBOARDINGPARTNERS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case GET_SEARCH_ONBOARDINGPARTNERS_FAILED:
      return {
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default login;
