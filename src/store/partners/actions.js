import {
  GET_PARTNERS,
  GET_PARTNERS_FAILED,
  GET_PARTNER_BY_ID,
  GET_PARTNER_BY_ID_FAILED,
  CHANGE_PARTNER_STATUS,
  CHANGE_PARTNER_STATUS_FAILED,
  PARTNERS_LOADING,
  UPDATE_PARTNER,
  UPDATE_PARTNER_FAILED,
  ADD_TICKET,
  ADD_TICKET_FAILED,
  CLEAR_ERRORS,
  GET_APPROVED_PARTNERS,
  GET_APPROVED_PARTNERS_FAILED,
  GET_PARTNERS_TRANSACTION_BY_ID,
  GET_PARTNERS_TRANSACTION_BY_ID_FAILED,
} from "./types";
import axios from "axios";
import { ip } from "../../config/config";

export const getPartners = () => {
  return (dispatch) => {
    dispatch(setPartersLoading());

    axios
      .get(`${ip}/partners`)
      .then((res) => {
        dispatch({
          type: GET_PARTNERS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: GET_PARTNERS_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const getPartnersTranscationById = (id) => {
  return (dispatch) => {
    dispatch(setPartersLoading());
    axios
      .get(`${ip}/business/transaction/all?businessPartnerId==${id}`)
      .then((res) => {
        dispatch({
          type: GET_PARTNERS_TRANSACTION_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: GET_PARTNERS_TRANSACTION_BY_ID_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const getPartnerById = (id) => {
  return (dispatch) => {
    dispatch(setPartersLoading());

    axios
      .get(`${ip}/partners/${id}`)
      .then((res) => {
        dispatch({
          type: GET_PARTNER_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: GET_PARTNER_BY_ID_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const updatePartnerDetails = (id, updateObj) => {
  return (dispatch) => {
    dispatch(setPartersLoading());
    axios
      .patch(`${ip}/partners/${id}`, {
        ...updateObj,
      })
      .then((res) => {
        console.log("update resposnse", res.data);
        dispatch({ type: UPDATE_PARTNER, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_PARTNER_FAILED, payload: err.response.data });
      });
  };
};

export const addTicket = (data) => {
  return (dispatch) => {
    dispatch(setPartersLoading());

    axios
      .post(`${ip}/admin/partners/addticket`, data)
      .then((res) => {
        dispatch({ type: ADD_TICKET, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_TICKET_FAILED, payload: err.response.data });
      });
  };
};

export const getApprovedPartners = () => async (dispatch) => {
  try {
    const res = await axios.get(`${ip}/admin/partners/approvedpartners`);
    dispatch({
      type: GET_APPROVED_PARTNERS,
      payload: res.data,
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: GET_APPROVED_PARTNERS_FAILED,
      payload: err.response.data,
    });
  }
};

export const setPartersLoading = () => {
  return {
    type: PARTNERS_LOADING,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
