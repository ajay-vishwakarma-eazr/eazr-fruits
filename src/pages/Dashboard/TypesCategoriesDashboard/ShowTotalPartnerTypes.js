import axios from "axios";
import React, { useEffect, useState } from "react";
import { ip } from "../../../config/config";
const ShowTotalPartnerTypes = () => {
  const [numberofPartnerTypes, setNumberofPartnerTypes] = useState(0);
  useEffect(() => {
    axios.get(`${ip}/partner-types/count`).then((res) => {
      setNumberofPartnerTypes(res.data);
    });
  }, []);

  return <>{!numberofPartnerTypes ? 0 : numberofPartnerTypes}</>;
};
export default ShowTotalPartnerTypes;
