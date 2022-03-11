import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../dashboard.scss";
import { getPartners } from "../../../store/partners/actions";
import { ip } from "../../../config/config";
import axios from "axios";
function ShowTotalNumberOfPartner() {
  const [numberOfApprovedPartners, setNumberOfApprovedPartners] =
    useState();

  useEffect(() => {
    axios.get(`${ip}/partners?filter=status||$eq||1`).then((res) => {
      setNumberOfApprovedPartners(res.data);
    });
  }, []);

  return (
    <>
      <div>
        {!numberOfApprovedPartners
          ? 0
          : numberOfApprovedPartners?.length}
      </div>
    </>
  );
}

export default ShowTotalNumberOfPartner;
