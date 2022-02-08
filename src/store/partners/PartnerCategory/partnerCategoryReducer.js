// import {
//   ADD_PARTNER_CATEGORY,
//   ADD_PARTNER_CATEGORY_FAILED,
//   CATEGORY_LOADING,
//   DELETE_PARTNER_CATEGORY,
//   DELETE_PARTNER_CATEGORY_FAILED,
//   GET_PARTNER_CATEGORY,
//   GET_PARTNER_CATEGORY_FAILED,
//   UPDATE_CATEGORY,
//   UPDATE_CATEGORY_FAILED,
// } from "./actionTypes";

// const initialState = {
//   partnerCategory: null,
//   loading: false,
//   errors: null,
// };

// const partnerCategoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CATEGORY_LOADING:
//       return {
//         ...state,
//         loading: true,
//         errors: null,
//       };
//     case GET_PARTNER_CATEGORY:
//       return {
//         ...state,
//         partnerCategory: action.payload,
//         errors: null,
//         loading: false,
//       };
//     case GET_PARTNER_CATEGORY_FAILED:
//       return {
//         ...state,
//         errors: action.payload,
//       };

//     case ADD_PARTNER_CATEGORY:
//       return {
//         ...state,
//         partnerCategory: action.payload,
//         loading: false,
//         errors: null,
//       };

//     case ADD_PARTNER_CATEGORY_FAILED:
//       return {
//         ...state,
//         errors: action.payload,
//       };

//     case UPDATE_CATEGORY:
//       return {
//         ...state,
//         loading: false,
//         partnerCategory: action.payload,
//       };
//     case UPDATE_CATEGORY_FAILED:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case DELETE_PARTNER_CATEGORY:
//       // const filterCategory = state.partnerCategory.filter(
//       //   (deleteData) => deleteData.id !== action.payload.id
//       // );
//       return {
//         ...state,
//         partnerCategory: action.payload,
//         loading: false,
//         errors: null,
//       };
//     case DELETE_PARTNER_CATEGORY_FAILED:
//       return {
//         ...state,
//         errors: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default partnerCategoryReducer;

import {
  ADD_PARTNER_CATEGORY,
  ADD_PARTNER_CATEGORY_FAILED,
  CATEGORY_LOADING,
  DELETE_PARTNER_CATEGORY,
  DELETE_PARTNER_CATEGORY_FAILED,
  GET_PARTNER_CATEGORY,
  GET_PARTNER_CATEGORY_BY_ID,
  GET_PARTNER_CATEGORY_BY_ID_FAILED,
  GET_PARTNER_CATEGORY_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_FAILED,
} from "./actionTypes";

const initialState = {
  partnerCategory: null,
  loading: false,
  errors: null,
};

const partnerCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case GET_PARTNER_CATEGORY:
      return {
        ...state,
        partnerCategory: action.payload,
        errors: null,
        loading: false,
      };
    case GET_PARTNER_CATEGORY_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    case GET_PARTNER_CATEGORY_BY_ID:
      return {
        ...state,
        partnerCategory: action.payload,
        errors: null,
        loading: false,
      };
    case GET_PARTNER_CATEGORY_BY_ID_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    case ADD_PARTNER_CATEGORY:
      return {
        ...state,
        partnerCategory: action.payload,
        loading: false,
        errors: null,
      };

    case ADD_PARTNER_CATEGORY_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    case UPDATE_CATEGORY:
      return {
        ...state,
        loading: false,
        partnerCategory: action.payload,
      };
    case UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_PARTNER_CATEGORY:
      return {
        ...state,
        partnerCategory: action.payload,
        loading: false,
        errors: null,
      };
    case DELETE_PARTNER_CATEGORY_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default partnerCategoryReducer;
