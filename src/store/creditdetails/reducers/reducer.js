import { 
    FETCH_CREDITDETAILS_PROFILE,
    FETCH_CREDITDETAILS_FAILURE,
    FETCH_CREDITDETAILS_SUCCESS
} from "../actions/actionType";

export const initialState = {
  creditDetails: [],
  error: "",
};

export const CreditDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDITDETAILS_PROFILE:
      return {
        ...state,
        errors: null,
      };

    case FETCH_CREDITDETAILS_SUCCESS:
      return {
        ...state,
        admin: action.payload,
        error: null,
      };

    case FETCH_CREDITDETAILS_FAILURE:
      return {
        ...state,
        admin: [],
        error: action.payload,
      };
    default:
      return state;
  }
};