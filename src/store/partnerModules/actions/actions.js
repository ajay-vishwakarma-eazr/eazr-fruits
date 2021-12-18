import React, { useEffect, useState } from "react";

import {
  FETCH_MODULE_FAILURE,
  FETCH_MODULE_REQUEST,
  FETCH_MODULE_SUCCESS,
} from "./actiontypes";
import axios from "axios";

import { ip } from "../../../config/config";

export const FetchModuleRequest = () => {
  return {
    type: FETCH_MODULE_REQUEST,
  };
};
export const FetchModuleSuccess = (modules) => {
  return {
    type: FETCH_MODULE_SUCCESS,
    payload: modules,
  };
};

export const FetchModuleFailure = (error) => {
  return {
    type: FETCH_MODULE_FAILURE,
    payload: error,
  };
};

axios
  .get(`${ip}/`)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

export const fetchModules = () => {
  return function (dispatch) {
    dispatch(FetchModuleRequest);
    // useEffect(() => {
    //   const Partner =
    axios
      .get(`${ip}/admin/partnerModule/partnerModule`)
      .then((res) => {
        //const users=res.data.map(user=>user.id)
        const users = res.data;
        console.log(users);

        dispatch(FetchModuleSuccess(users));
      })
      .catch((err) => {
        dispatch(FetchModuleFailure(err.message));
      });
    //     Partner();
    // });
  };
};
