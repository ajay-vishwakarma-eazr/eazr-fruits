import {
  ADD_PARTNER_TYPE,
  ADD_PARTNER_TYPE_FAILED,
  TYPE_LOADING,
  DELETE_PARTNER_TYPE,
  DELETE_PARTNER_TYPE_FAILED,
  GET_PARTNER_TYPE,
  GET_PARTNER_TYPE_FAILED,
  GET_PARTNER_TYPE_BRAND,
  GET_PARTNER_TYPE_BRAND_FAILED,
  GET_PARTNER_TYPE_BY_ID,
  GET_PARTNER_TYPE_BY_ID_FAILED,
  UPDATE_TYPE,
  UPDATE_TYPE_FAILED,
} from "./actiontypes.js";
import axios from "axios";

import { ip } from "../../../../config/config";

export const getPartnerType = (pageNumber) => {
  return (dispatch) => {
    dispatch({ type: TYPE_LOADING });
    axios
      .get(
        `${ip}/partner-types?sort=id,ASC&page=${pageNumber}&limit=10`
      )
      .then((res) => {
        dispatch({
          type: GET_PARTNER_TYPE,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PARTNER_TYPE_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getPartnerTypeBrandInformation = () => {
  return (dispatch) => {
    dispatch({ type: TYPE_LOADING });
    axios
      .get(`${ip}/partner-types?sort=id,DESC`)
      .then((res) => {
        dispatch({
          type: GET_PARTNER_TYPE_BRAND,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PARTNER_TYPE_BRAND_FAILED,
          payload: err.message,
        });
      });
  };
};

export const addPartnerType = (newType, pageNumber) => {
  return (dispatch) => {
    axios
      .post(`${ip}/partner-types`, newType)
      .then((res) => {
        axios
          .get(`${ip}/partner-types?page=${pageNumber}&limit=10&sort=id,DESC`)
          .then((res) => {
            dispatch({
              type: GET_PARTNER_TYPE,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_PARTNER_TYPE_FAILED,
              payload: err.response.data,
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: ADD_PARTNER_TYPE_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const updatePartnerType = (id, updateType, pageNumber) => {
  return (dispatch) => {
    axios
      .patch(`${ip}/partner-types/${id}?sort=id,ASC`, { ...updateType })
      .then((res) => {
        axios
          .get(`${ip}/partner-types?page=${pageNumber}&limit=10&sort=id,DESC`)
          .then((res) => {
            dispatch({
              type: GET_PARTNER_TYPE,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_PARTNER_TYPE_FAILED,
              payload: err.message,
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_TYPE_FAILED,
          payload: err.response.data,
        });
      });
  };
};



export const deleteType = (id, pageNumber) => {
  return (dispatch) => {
    axios
      .delete(`${ip}/partner-types/${id}?sort=id,ASC`)
      .then((res) => {
        axios
          .get(`${ip}/partner-types?page=${pageNumber}&limit=10&sort=id,DESC`)
          .then((res) => {
            dispatch({
              type: GET_PARTNER_TYPE,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_PARTNER_TYPE_FAILED,
              payload: err.response.data,
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_PARTNER_TYPE_FAILED,
          payload: err.response.data.message,
        });
      });
  };
};


