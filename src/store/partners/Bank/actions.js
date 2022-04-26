import axios from "axios";
import { ip } from "../../../config/config";
import {
  GET_BANK_DETAILS,
  GET_BANK_DETAILS_FAILED,
  UPDATE_BANK,
  UPDATE_BANK_FAILED,
  BANK_LOADING,
} from "./type";

export const setBankLoading = () => {
  return {
    type: BANK_LOADING,
  };
};

export const getBankDetails = (id) => async (dispatch) => {
 
  try {
    dispatch({ type:BANK_LOADING})
    const res = await axios.get(`${ip}/banks?filter=partnerId||$eq||${id}`);
    dispatch({
      type: GET_BANK_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: GET_BANK_DETAILS_FAILED,
      payload: err.response?.data,
    });
  }
};

// export const getBankDetails = (id) => {
//   return (dispatch) => {
//     dispatch(setBankLoading(id));
//     axios
//       .get(`${ip}/banks?filter=partnerId||$eq||${id}`)
//       .then((res) => {
//         dispatch({
//           type: GET_BANK_DETAILS,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: GET_BANK_DETAILS_FAILED,
//           payload: err.message,
//         });
//       });
//   };
// };



// export const updateBankDetails = (id,data) => async (dispatch) => {
//   try {
//     const res = await axios.get(`${ip}/banks/${id}`).then((res));
//     dispatch({
//       type: GET_BANK_DETAILS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log("Error: " + err.message);
//     dispatch({
//       type: GET_BANK_DETAILS_FAILED,
//       payload: err.response.data,
//     });
//   }
// };

export const updateBankDetails = (id, updateObj) => {
  return (dispatch) => {
    axios
      .patch(`${ip}/banks/${id}`, {
        ...updateObj,
      })
      .then((res) => {
        dispatch({ type: UPDATE_BANK, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_BANK_FAILED, payload: err.response.data });
      });
  };
};
