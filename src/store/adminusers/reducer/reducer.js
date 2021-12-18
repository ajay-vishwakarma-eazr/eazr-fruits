import {
  FETCH_ADMIN_USERS_FAILURE,
  FETCH_ADMIN_USERS_REQUEST,
  FETCH_ADMIN_USERS_SUCCESS,
} from "../actions/actiontypes";

export const initialState = {
  loading: false,
  adminusers: [],
  errror: "",
};
 
export const AdminUserReducer = (state = initialState, action) => {
  switch (action.type) {
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

    // case SET_USER:
    //   return {
    //     ...state,
    //     users: action.payload,
    //   };
    // case UPDATE_PROFILE_SUCCESS:
    //   return {
    //     ...state,
    //     partner: action.payload,
    //   };
    // case UPDATE_PROFILE_FAILED:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    // case ONCLICK_ID:
    //   const newPartners = state.partners.map((partnerObj) =>
    //     partnerObj.id === action.id
    //       ? { partnerObj: action.payload }
    //       : partnerObj
    //   );
    //   return {
    //     loading: false,
    //     partners: [],
    //     partner: newPartners,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};
