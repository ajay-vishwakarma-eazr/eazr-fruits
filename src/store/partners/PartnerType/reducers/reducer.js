import {
  ADD_PARTNER_TYPE,
  ADD_PARTNER_TYPE_FAILED,
  TYPE_LOADING,
  DELETE_PARTNER_TYPE,
  DELETE_PARTNER_TYPE_FAILED,
  GET_PARTNER_TYPE,
  GET_PARTNER_TYPE_FAILED,
  GET_PARTNER_TYPE_BY_ID,
  GET_PARTNER_TYPE_BY_ID_FAILED,
  UPDATE_TYPE,
  UPDATE_TYPE_FAILED,
} from "../actions/actiontypes";

const initialState = {
  partnerType: [],
  loading: false,
  errors: null,
};

const partnerTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case GET_PARTNER_TYPE:
      return {
        ...state,
        partnerType: action.payload,
        errors: null,
        loading: false,
      };
    case GET_PARTNER_TYPE_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    case GET_PARTNER_TYPE_BY_ID:
      return {
        ...state,
        partnerType: action.payload,
        errors: null,
        loading: false,
      };
    case GET_PARTNER_TYPE_BY_ID_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    case ADD_PARTNER_TYPE:
      return {
        ...state,
        partnerType: action.payload,
        loading: false,
        errors: null,
      };

    case ADD_PARTNER_TYPE_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    case UPDATE_TYPE:
      return {
        ...state,
        loading: false,
        partnerType: action.payload,
      };
    case UPDATE_TYPE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_PARTNER_TYPE:
      // const filterCategory = state.partnerCategory.filter(
      //   (deleteData) => deleteData.id !== action.payload.id
      // );
      return {
        ...state,
        partnerType: action.payload,
        loading: false,
        errors: null,
      };
    case DELETE_PARTNER_TYPE_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default partnerTypeReducer;