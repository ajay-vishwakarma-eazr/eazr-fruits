import {
  FETCH_ADMIN_USERS_FAILURE,
  FETCH_ADMIN_USERS_REQUEST,
  FETCH_ADMIN_USERS_SUCCESS,
  USER_LOADING,
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILED,
  ONCLICK_ID,
  SET_USER,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESS,
} from "../actions/actiontypes";

export const initialState = {
  loading: false,
  adminusers: [],
  errror: "",
};
 
export const AdminUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case FETCH_ADMIN_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ADMIN_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        adminusers: action.payload,
        error: null,
      };

    case FETCH_ADMIN_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        adminusers: [],
        error: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        loading: false,
        adminusers: action.payload,
        errors: null,
      };
    case GET_USER_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        adminusers: action.payload,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        adminusers: action.payload,
      };
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case ONCLICK_ID:
      const newAdminuser = state.adminusers.map((userObj) =>
        userObj.id === action.id
          ? { userObj: action.payload }
          : userObj
      );
      return {
        loading: false,
        adminusers: newAdminuser,
        error: action.payload,
      };

    default:
      return state;
  }
};
