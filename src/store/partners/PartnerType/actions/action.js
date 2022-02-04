import {
  ADD_PARTNER_TYPE,
  ADD_PARTNER_TYPE_FAILED,
  TYPE_LOADING,
  DELETE_PARTNER_TYPE,
  DELETE_PARTNER_TYPE_FAILED,
  GET_PARTNER_TYPE,
  GET_PARTNER_TYPE_FAILED,
  UPDATE_TYPE,
  UPDATE_TYPE_FAILED,
} from "./actiontypes.js";
import axios from "axios";

import { ip } from "../../../../config/config";

export const getPartnerType = () => {
  return (dispatch) => {
    dispatch({ type: TYPE_LOADING });
    axios
      .get(`${ip}/partner-types?sort=id,ASC`)
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
  };
};

export const addPartnerType = (newType) => {
  return (dispatch) => {
    axios
      .post(`${ip}/partner-types`, newType)
      .then((res) => {
        axios
          .get(`${ip}/partner-types?sort=id,ASC`)
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

export const updatePartnerType = (id, updateType) => {
  return (dispatch) => {
    axios
      .patch(`${ip}/partner-types/${id}?sort=id,ASC`, { ...updateType })
      .then((res) => {
        axios
          .get(`${ip}/partner-types`)
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
          type: UPDATE_TYPE_FAILED,
          payload: err.response.data,
        });
      });
  };
};

// export const updatePartnerType = (id, updateType) => {
//   return (dispatch) => {
//     axios
//       .patch(`${ip}/partner-types/${id}`, { ...updateType })
//       .then((res) => {
//         dispatch({
//           type: UPDATE_TYPE,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: UPDATE_TYPE_FAILED,
//           payload: err.response.data,
//         });
//       });
//   };
// };

export const deleteType = (id) => {
  return (dispatch) => {
    axios
      .delete(`${ip}/partner-types/${id}?sort=id,ASC`)
      .then((res) => {
        axios
          .get(`${ip}/partner-types`)
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


// export const deleteType = (id) => {
//   return (dispatch) => {
//     axios
//       .delete(`${ip}/partner-types/${id}`)
//       .then((res) => {
//         console.log(res);
//         dispatch({
//           type: DELETE_PARTNER_TYPE,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: DELETE_PARTNER_TYPE_FAILED,
//           payload: err.response.data.message,
//         });
//       });
//   };
// };
