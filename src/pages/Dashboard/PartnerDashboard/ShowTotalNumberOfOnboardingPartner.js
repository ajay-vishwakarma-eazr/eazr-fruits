import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../dashboard.scss";
import { ip } from "../../../config/config";
import axios from "axios";
function ShowTotalNumberOfOnboardingPartner() {
  const [numberOfOnboardingPartners, setNumberOfOnboardingPartners] =
    useState("");

  useEffect(() => {
    axios.get(`${ip}/partners`).then((res) => {
      setNumberOfOnboardingPartners(res.data);
    });
  }, []);

  return (
    <>
      <div>{numberOfOnboardingPartners.length}</div>
    </>
  );
}

export default ShowTotalNumberOfOnboardingPartner;
