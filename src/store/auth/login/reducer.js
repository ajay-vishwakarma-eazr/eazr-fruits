// import {
//   CHECK_LOGIN,
//   LOGIN_USER_SUCCESSFUL,
//   API_ERROR,
//   LOGOUT_USER,
//   LOGOUT_USER_SUCCESS,
//   OTP_SENT,
//   OTP_SENT_FAILED,
//   LOGOUT_USER_FAILED,
//   LOGIN_LOADING,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_FAILED,
//   REGISTER_USER_LOADING,
// } from "./actionTypes";

// const initialState = {
//   loginError: "",
//   message: "",
//   loading: false,
//   errors: {},
//   showOtpModal: false,
//   isAuthenticated: false,
//   user: [],
// };

// const login = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_LOADING:
//       return {
//         ...state,
//         loading: true,
//         errors: {},
//       };

//     case OTP_SENT:
//       return {
//         ...state,
//         loading: false,
//         errors: action.payload,
//         showOtpModal: true,
//       };

//     case OTP_SENT_FAILED:
//       return {
//         ...state,
//         loading: false,
//         errors: action.payload,
//       };

//     case CHECK_LOGIN:
//       return {
//         ...state,
//         loading: true,
//       };

//     case LOGIN_USER_SUCCESSFUL:
//       console.log("user",action.payload.user);
//       return {
//         ...state,
//         loading: false,
//         isAuthenticated: true,
//         user: action.payload.user,
//       };

//     // case REGISTER_USER_SUCCESS:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     user: action.payload,
//     //   };

//     // case REGISTER_USER_FAILED:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     errors: action.payload,
//     //   };

//     case LOGOUT_USER:
//       return { ...state };

//     case LOGOUT_USER_SUCCESS:
//       return { ...state };

//     case API_ERROR:
//       state = {
//         ...state,
//         loading: false,
//         loginError: action.payload,
//       }
//        break;

//     default:
//       return { ...state };
//   }
//   return state;
// };

// export default login;
