import {
  FETCH_ADMIN_PROFILE,
  FETCH_ADMIN_FAILURE,
  FETCH_ADMIN_SUCCESS,
} from "../actions/actiontypes";

export const initialState = {
  admin: [],
  error: "",
};

export const AdminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMIN_PROFILE:
      return {
        ...state,
        errors: null,
      };

    case FETCH_ADMIN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
        error: null,
      };

    case FETCH_ADMIN_FAILURE:
      return {
        ...state,
        admin: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
