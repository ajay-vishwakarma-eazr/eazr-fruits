import { act } from "react-dom/test-utils";
import { UPDATE_PARTNER_FAILED } from "../../partners/types";
import {
  SET_PARTNER,
  FETCH_PARTNER_SUCCESS,
  FETCH_PARTNER_REQUEST,
  FETCH_PARTNER_FAILURE,
  ONCLICK_ID,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
} from "../actions/actiontypes";

export const initialState = {
  loading: false,
  partner: {},
  partners: [],
  errror: "",
};

export const BusinessPartnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTNER_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case FETCH_PARTNER_SUCCESS:
      return {
        ...state,
        loading: false,
        partners: action.payload,
        partner: {},
        error: null,
      };
    case FETCH_PARTNER_FAILURE:
      return {
        ...state,
        loading: false,
        partners: [],
        partner: {},
        error: action.payload,
      };

    case SET_PARTNER:
      return {
        ...state,
        partner: action.payload,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        partner: action.payload,
      };
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case ONCLICK_ID:
      const newPartners = state.partners.map((partnerObj) =>
        partnerObj.id === action.id
          ? { partnerObj: action.payload }
          : partnerObj
      );
      return {
        loading: false,
        partners: [],
        partner: newPartners,
        error: action.payload,
      };

    default:
      return state;
  }
};
