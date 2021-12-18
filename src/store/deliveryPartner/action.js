import {
  GET_ALL_DELIVERY_PARTNERS,
  GET_ALL_DELIVERY_PARTNERS_FAILED,
} from "./types";
import axios from "axios";
import { ip } from "../../config/config";

export const getDeliveryPartners = () => async (dispatch) => {
  
  try {
    const res = await axios.get(`${ip}/admin/delivery`);
  
    dispatch({
      type: GET_ALL_DELIVERY_PARTNERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_DELIVERY_PARTNERS_FAILED,
      payload: err.response.data,
    });
  }
};
