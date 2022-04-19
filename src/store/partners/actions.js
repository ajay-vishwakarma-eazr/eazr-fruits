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
  GET_PARTNER_TYPE,
  GET_PARTNER_TYPE_FAILED,
  GET_PARTNER_CATEGORY_TYPE_FAILED,
  GET_PARTNER_CATEGORY_TYPE,
  PARTNER_CATEGORY_TYPE,
  PARTNER_CATEGORY_TYPE_FAILED,
  GET_SEARCH_APPROVEDPARTNERS,
  GET_SEARCH_APPROVEDPARTNERS_FAILED,
  GET_SEARCH_ONBOARDINGPARTNERS,
  GET_SEARCH_ONBOARDINGPARTNERS_FAILED,
} from "./types";
import axios from "axios";
import { ip } from "../../config/config";

export const getPartners = (pageNumber) => {
  return (dispatch) => {
    dispatch(setPartersLoading());

    axios
      .get(
        `${ip}/partners?filter=status||ne||1&page=${pageNumber}&limit=10&sort=id,DESC`
      )
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
          payload: err.message,
        });
      });
  };
};

export const searchOnboardingPartners = (search) => {
  return (dispatch) => {
    dispatch(setPartersLoading());
    axios
      .get(
        // `${ip}/partners?filter=status||ne||1&s={"$or": [{"businessName": {"contL":"${search}"}},{"contactNumber": {"contL":"${search}"}},{"email": {"contL":"${search}"}}]}`
        `${ip}/partners?s={"$and": [{"status":{"$ne":1}},{"businessName": {"contL":"${search}"}}]}`
      )
      .then((res) => {
        dispatch({
          type: GET_SEARCH_ONBOARDINGPARTNERS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: GET_SEARCH_ONBOARDINGPARTNERS_FAILED,
          payload: err.response?.data,
        });
      });
  };
};

export const getApprovedPartners = (pageNumber) => {
  return (dispatch) => {
    dispatch(setPartersLoading());
    axios
      .get(
        `${ip}/partners?filter=status||eq||1&page=${pageNumber}&limit=10&sort=id,DESC`
      )
      .then((res) => {
        dispatch({
          type: GET_PARTNERS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PARTNERS_FAILED,
          payload: err.message,
        });
      });
  };
};

export const fetchSearchApprovedPartners = (search) => {
  return function (dispatch) {
    dispatch(setPartersLoading);
    axios
      .get(
        `${ip}/partners?s={"$and": [{"status":{"$eq":1}},{"businessName": {"contL":"${search}"}}]}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_SEARCH_APPROVEDPARTNERS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_APPROVEDPARTNERS_FAILED,
          payload: err,
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
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PARTNER_BY_ID_FAILED,
          payload: err.response?.data,
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
        axios
          .get(`${ip}/partners/${id}`)
          .then((res) => {
            dispatch({
              type: GET_PARTNER_BY_ID,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_PARTNER_BY_ID_FAILED,
              payload: err.response.data,
            });
          });
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

export const getPartnersTypeById = (id) => {
  return (dispatch) => {
    dispatch(setPartersLoading());

    axios
      .get(`${ip}/partner-types/${id}`)
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

export const getPartnersCategotyTypeById = (id) => {
  return (dispatch) => {
    dispatch(setPartersLoading());
    axios
      .get(`${ip}/partner-category/${id}`)
      .then((res) => {
        dispatch({
          type: PARTNER_CATEGORY_TYPE,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: PARTNER_CATEGORY_TYPE_FAILED,
          payload: err.response.data,
        });
      });
  };
};
