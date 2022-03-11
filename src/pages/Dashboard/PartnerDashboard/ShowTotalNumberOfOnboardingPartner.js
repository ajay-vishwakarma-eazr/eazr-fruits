import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../dashboard.scss";
import { getPartners } from "../../../store/partners/actions";
import { ip } from "../../../config/config";
import axios from "axios";
function ShowTotalNumberOfOnboardingPartner() {
  const [numberOfOnboardingPartners, setNumberOfOnboardingPartners] =
    useState();

  useEffect(() => {
    axios.get(`${ip}/partners?filter=status||$ne||1`).then((res) => {
      setNumberOfOnboardingPartners(res.data);
    });
  }, []);

  return (
    <>
      <div>
        {
          !numberOfOnboardingPartners ? 0 :numberOfOnboardingPartners?.length
        }
      </div>
    </>
  );
}

export default ShowTotalNumberOfOnboardingPartner;
