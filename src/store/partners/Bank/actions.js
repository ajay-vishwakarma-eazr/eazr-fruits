import axios from "axios";
import { ip } from "../../../config/config";
import { GET_BANK_DETAILS, GET_BANK_DETAILS_FAILED } from "./type";

export const getBankDetails = (id) => async (dispatch) => {
 
  try {
    const res = await axios.get(`${ip}/banks?filter=partnerId||$eq||${id}`);
    dispatch({
      type: GET_BANK_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: GET_BANK_DETAILS_FAILED,
      payload: err.response.data,
    });
  }
};



export const updateBankDetails = (id,data) => async (dispatch) => {
  try {
    const res = await axios.get(`${ip}/banks?filter=partnerId||$eq||${id}`).then((res));
    dispatch({
      type: GET_BANK_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: GET_BANK_DETAILS_FAILED,
      payload: err.response.data,
    });
  }
};