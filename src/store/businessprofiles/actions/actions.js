import {
  SET_PARTNER,
  ONCLICK_ID,
  FETCH_PARTNER_FAILURE,
  FETCH_PARTNER_REQUEST,
  FETCH_PARTNER_SUCCESS,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESS,
} from "./actiontypes";
import axios from "axios";
import { UPDATE_PARTNER_FAILED } from "../../partners/types";
import { ip } from "../../../config/config";



export const FetchPartnerRequest = () => {
  return {
    type: FETCH_PARTNER_REQUEST,
  };
};
export const FetchPartnerSuccess = (partners) => {
  return {
    type: FETCH_PARTNER_SUCCESS,
    payload: partners,
  };
};

export const FetchPartnerFailure = (error) => {
  return {
    type: FETCH_PARTNER_FAILURE,
    payload: error,
  };
};

export const UpdateProfileSuccess = (partner) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: partner,
  };
};
export const UpdateProfileFailed = (error) => {
  return {
    type: UPDATE_PROFILE_FAILED,
    payload: error,
  };
};

export const fetchPartners = () => {
  return function (dispatch) {
    dispatch(FetchPartnerRequest);
    axios
      .get(`${ip}/business/profile/all`)
      .then((res) => {
        const partners = res.data;
        dispatch(FetchPartnerSuccess(partners));
      })
      .catch((err) => {
        console.log(err);
        dispatch(FetchPartnerFailure(err.message));
      });
  };
};

export const updateProfile = (data) => {
  return function (dispatch) {
    axios
      // .post(`${ip}/admin/businessprofiles/updatebusinessprofile`, data, {
      .post(`${ip}/business/profile/all`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const partners = res.data;
        console.log(partners);
        dispatch(UpdateProfileSuccess(partners));
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

export const setPartner = (partner) => {
  return {
    type: SET_PARTNER,
    payload: partner,
  };
};
