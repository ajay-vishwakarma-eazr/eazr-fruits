import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  USER_LOADING,
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILED,
  ONCLICK_ID,
  SET_USER,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESS,
  GET_SEARCH_USER,
  GET_SEARCH_USER_FAILED,
  CREDIT_SCORE,
  CREDIT_SCORE_FAILED,
  CLEAR_DATA,
  UPLOAD,
  UPLOAD_FAILED,
} from "../actions/actiontypes";

export const initialState = {
  loading: false,
  users: [],
  errror: "",
  search:[],
  image:""
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        loading: false,
        users: action.payload,
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
        users: action.payload,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case ONCLICK_ID:
      const newuser = state.users.map((userObj) =>
        userObj.id === action.id ? { userObj: action.payload } : userObj
      );
      return {
        loading: false,
        users: newuser,
        error: action.payload,
      };

    case GET_SEARCH_USER:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case GET_SEARCH_USER_FAILED:
      return {
        ...state,
        error: action.payload,
      };

      case UPLOAD: 
      return {
        ...state,
        loading:false,
        image:action.payload,        
      }

      case UPLOAD_FAILED: 
      return {
        ...state,
        error:action.payload,
      }

    case CREDIT_SCORE:
      return {
        ...state,
        loading: false,
        credit: action.payload,
        errors: null,
      };
    case CREDIT_SCORE_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
