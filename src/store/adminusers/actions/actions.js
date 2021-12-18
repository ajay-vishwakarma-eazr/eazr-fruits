import {
  FETCH_ADMIN_USERS_FAILURE,
  FETCH_ADMIN_USERS_REQUEST,
  FETCH_ADMIN_USERS_SUCCESS,
} from "./actiontypes";
import axios from "axios";
import { ip } from "../../../config/config";

export const FetchAdminUsersRequest = () => {
  return {
    type: FETCH_ADMIN_USERS_REQUEST,
  };
};
export const FetchAdminUsersSuccess = (users) => {
  return {
    type: FETCH_ADMIN_USERS_SUCCESS,
    payload: users,
  };
};

export const FetchAdminUsersFailure = (error) => {
  return {
    type: FETCH_ADMIN_USERS_FAILURE,
    payload: error,
  };
};

export const fetchAdminUsers = () => {
  return function (dispatch) {
    dispatch(FetchAdminUsersRequest);
    axios
      .get(`${ip}/user/account/all`)
      .then((res) => {
        // const users=res.data.map(user=>user.id)
        const adminusers = res.data;
        dispatch(FetchAdminUsersSuccess(adminusers));
      })
      .catch((err) => {
        console.log(err);
        dispatch(FetchAdminUsersFailure(err.message));
        // alert('No data found')
      });
  };
};

// export const updateProfile = (data) => {
//   return function (dispatch) {
//     axios
//       // .post(`${ip}/admin/businessprofiles/updatebusinessprofile`, data, {
//       .post(`${ip}/business/profile/all`, data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         const partners = res.data;
//         console.log(partners);
//         dispatch(UpdateProfileSuccess(partners));
//       })
//       .catch((err) => {
//         dispatch(UpdateProfileFailed(err.message));
//       });
//   };
// };

// export const OnClickItem = (id) => {
//   return {
//     type: ONCLICK_ID,
//     payload: id,
//   };
// };

// export const setUsers = (user) => {
//   return {
//     type: SET_USER,
//     payload: user,
//   };
//};
