import axios from "axios";
import React, { useEffect, useState } from "react";
import { ip } from "../../../config/config";
const TotalPartnerTickets = () => {
  const [numberofPartnerTickets, setNumberofpartnerTickets] = useState(0);
  useEffect(() => {
    axios.get(`${ip}/support-tickets/count`).then((res) => {
      setNumberofpartnerTickets(res.data);
    });
  }, []);

  return <>{!numberofPartnerTickets ? 0 : numberofPartnerTickets}</>;
};
export default TotalPartnerTickets;
// kamlesh
