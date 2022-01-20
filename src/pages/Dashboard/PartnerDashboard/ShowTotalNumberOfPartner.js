import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../dashboard.scss";
import { getPartners } from "../../../store/partners/actions";
import { ip } from "../../../config/config";
import axios from "axios";
function ShowTotalNumberOfPartner() {
  const [numberOfOnboardingPartners, setNumberOfOnboardingPartners] =
    useState();

  useEffect(() => {
    axios.get(`${ip}/partners`).then((res) => {
      setNumberOfOnboardingPartners(res.data);
    });
  }, []);

  return (
    <>
      <div>
        {!numberOfOnboardingPartners
          ? 0
          : numberOfOnboardingPartners?.filter((data) => data.status === 1)
              ?.length}
      </div>
    </>
  );
}

export default ShowTotalNumberOfPartner;
