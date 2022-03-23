

import axios from "axios";
import { ip } from "../../config/config";
import {
  ADD_PARTNER_CATEGORY,
  ADD_PARTNER_CATEGORY_FAILED,
  CATEGORY_LOADING,
  DELETE_PARTNER_CATEGORY,
  DELETE_PARTNER_CATEGORY_FAILED,
  GET_PARTNER_CATEGORY,
  GET_PARTNER_CATEGORY_FAILED,
  GET_PARTNER_CATEGORY_BY_ID,
  GET_PARTNER_CATEGORY_BY_ID_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_FAILED,
} from "./actionTypes";

export const getPartnerCategoryBrandInformation = () => {
  return (dispatch) => {
    dispatch({ type: CATEGORY_LOADING });
    axios
      .get(`${ip}/partner-category?sort=id,DESC`)
      .then((res) => {
        dispatch({
          type: GET_PARTNER_CATEGORY,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PARTNER_CATEGORY_FAILED,
          payload: err.response?.data,
        });
      });
  };
};

export const getPartnerCategory = (pageNumber) => {
  return (dispatch) => {
    dispatch({ type: CATEGORY_LOADING });
    axios
      .get(`${ip}/partner-category?page=${pageNumber}&limit=10`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_PARTNER_CATEGORY,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PARTNER_CATEGORY_FAILED,
          payload: err.message,
          // payload: err.response.data,
        });
      });
  };
};

export const getPartnerCategoryById = (id) => {
  return (dispatch) => {
    dispatch({ type: CATEGORY_LOADING });
    axios
      .get(`${ip}/partner-category/${id}`)
      .then((res) => {
        dispatch({
          type: GET_PARTNER_CATEGORY_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PARTNER_CATEGORY_BY_ID_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const addPartnerCategory = (newCategory, pageNumber) => {
  return (dispatch) => {
    dispatch({ type: CATEGORY_LOADING });
    axios
      .post(`${ip}/partner-category`, newCategory)
      .then((res) => {
        axios
          .get(
            `${ip}/partner-category?page=${pageNumber}&limit=10&sort=id,DESC`
          )
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

export const updatePartnerCategory = (id, updateCategory, pageNumber) => {
  return (dispatch) => {
    dispatch({ type: CATEGORY_LOADING });
    axios
      .patch(`${ip}/partner-category/${id}`, { ...updateCategory })
      .then((res) => {
        axios
          .get(
            `${ip}/partner-category?page=${pageNumber}&limit=10&sort=id,DESC`
          )
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

export const deleteCategory = (id, pageNumber) => {
  return (dispatch) => {
    dispatch({ type: CATEGORY_LOADING });
    axios
      .delete(`${ip}/partner-category/${id}`)
      .then((res) => {
        axios
          .get(
            `${ip}/partner-category?page=${pageNumber}&limit=10&sort=id,DESC`
          )
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
