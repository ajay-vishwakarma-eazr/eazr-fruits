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
} from "./actiontypes";
import axios from "axios";
import { ip } from "../../../config/config";

export const FetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const FetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const FetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(FetchUsersRequest);
    axios
      .get(`${ip}/users`)
      .then((res) => {
        const users = res.data;
        dispatch(FetchUsersSuccess(users));
      })
      .catch((err) => {
        console.log(err);
        dispatch(FetchUsersFailure(err.message));
        // alert('No data found')
      });
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const UpdateProfileSuccess = (user) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: user,
  };
};

export const UpdateProfileFailed = (error) => {
  return {
    type: UPDATE_PROFILE_FAILED,
    payload: error,
  };
};

export const fetchUserById = (id) => {
  return (dispatch) => {
    dispatch(setUserLoading());
    axios
      .get(`${ip}/users/${id}`)
      .then((res) => {
        dispatch({
          type: GET_USER_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: GET_USER_BY_ID_FAILED,
          payload: err.response.data,
        });
      });
  };
};


export const updateUserDetails = (id, formData) => {
  return (dispatch) => {
    dispatch(setUserLoading());
    axios
      .patch(`${ip}/users/${id}`,{...formData})
      .then((res) => {
        const updateObj = res.data;
        dispatch(UpdateProfileSuccess(updateObj));
      })
      .catch((err) => {
        dispatch(UpdateProfileFailed(err.message));
      });
  };
};


export const OnClickItem = (id) => {
  return {
    type: ONCLICK_ID,
    payload: id,
  };
};

export const setUsers = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
