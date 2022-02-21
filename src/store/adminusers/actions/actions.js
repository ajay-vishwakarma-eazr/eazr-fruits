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
  GET_USER_BILL_BY_ID,
  GET_USER_BILL_BY_ID_FAILED,
  GET_SEARCH_USER,
  GET_SEARCH_USER_FAILED,
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

export const fetchUsers = (pageNumber) => {
  return function (dispatch) {
    dispatch(FetchUsersRequest);
    axios
      .get(`${ip}/users?page=${pageNumber}&limit=10&sort=id,DESC`)
      .then((res) => {
        const users = res.data;
        dispatch(FetchUsersSuccess(users));
      })
      .catch((err) => {
        console.log(err);
        dispatch(FetchUsersFailure(err.message));
      });
  };
};

export const fetchSearchUsers = (search) => {
  return function (dispatch) {
    dispatch(FetchUsersRequest);
    axios
      .get(
        `${ip}/users?s={"$or": [{"fullName": {"starts":"${search}"}},{"email": {"starts":"${search}"}},{"contactNumber": {"starts":"${search}"}}]}`
      )
      .then((res) => {
        console.log(res.data);
        const users = res.data;
        dispatch({
          type: GET_SEARCH_USER,
          payload: users,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_USER_FAILED,
          payload: err,
        });
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
          payload: err.message,
          // payload: err.response.data,
        });
      });
  };
};


export const fetchUserBillById = (id) => {
  return (dispatch) => {
    dispatch(setUserLoading());
    axios
      .get(`${ip}/bills/${id}`)
      .then((res) => {
        dispatch({
          type: GET_USER_BILL_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: GET_USER_BILL_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};


export const updateUserDetails = (id, formData, pageNumber) => {
  return (dispatch) => {
    dispatch(setUserLoading());
    axios
      .patch(`${ip}/users/${id}`, {...formData })
      .then((res) => {
        axios
          .get(`${ip}/users?page=${pageNumber}&limit=10&sort=id,DESC`)
          .then((res) => {
            const users = res.data;
            dispatch(FetchUsersSuccess(users));
          })
          .catch((err) => {
            console.log(err);
            dispatch(FetchUsersFailure(err.message));
          });
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
