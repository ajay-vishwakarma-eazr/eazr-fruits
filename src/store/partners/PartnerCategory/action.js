import axios from "axios";
import { ip } from "../../../config/config";
import {
  ADD_PARTNER_CATEGORY,
  ADD_PARTNER_CATEGORY_FAILED,
  CATEGORY_LOADING,
  DELETE_PARTNER_CATEGORY,
  DELETE_PARTNER_CATEGORY_FAILED,
  GET_PARTNER_CATEGORY,
  GET_PARTNER_CATEGORY_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_FAILED,
} from "./actionTypes";

export const getPartnerCategory = (pageNumber) => {
  return (dispatch) => {
    dispatch({ type: CATEGORY_LOADING });
    axios
      .get(
        `${ip}/partner-category?sort=id,ASC&page=${pageNumber}&limit=10&sort=id,ASC`
      )
      .then((res) => {
        debugger;
        dispatch({
          type: GET_PARTNER_CATEGORY,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        debugger;
        dispatch({
          type: GET_PARTNER_CATEGORY_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const addPartnerCategory = (newCategory) => {
  return (dispatch) => {
    axios
      .post(`${ip}/partner-category`, newCategory)
      .then((res) => {
        axios
          .get(`${ip}/partner-category?sort=id,ASC`)
          .then((res) => {
            dispatch({
              type: GET_PARTNER_CATEGORY,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_PARTNER_CATEGORY_FAILED,
              payload: err.response.data,
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: ADD_PARTNER_CATEGORY_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const updatePartnerCategory = (id, updateCategory) => {
  return (dispatch) => {
    axios
      .patch(`${ip}/partner-category/${id}`, { ...updateCategory })
      .then((res) => {
        axios
          .get(`${ip}/partner-category?sort=id,ASC`)
          .then((res) => {
            dispatch({
              type: GET_PARTNER_CATEGORY,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_PARTNER_CATEGORY_FAILED,
              payload: err.response.data,
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_CATEGORY_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    axios
      .delete(`${ip}/partner-category/${id}`)
      .then((res) => {
        console.log(res);
        axios
          .get(`${ip}/partner-category?sort=id,ASC`)
          .then((res) => {
            dispatch({
              type: GET_PARTNER_CATEGORY,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_PARTNER_CATEGORY_FAILED,
              payload: err.response.data,
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_PARTNER_CATEGORY_FAILED,
          payload: err.response.data.message,
        });
      });
  };
};
