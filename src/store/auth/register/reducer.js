import {
  REGISTER_ADMIN_FAILED,
  REGISTER_ADMIN_LOADING,
  REGISTER_ADMIN_SUCCESS,
} from "./actionTypes";

const initialState = {
  error: null,
  loading: false,
  register: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ADMIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_ADMIN_SUCCESS:
      return {
        ...state,
        register: action.payload,
        loading: false,
        error: null,
      };
    case REGISTER_ADMIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        register:[]
      };

    default:
      return state;
  }
};

export default registerReducer;
