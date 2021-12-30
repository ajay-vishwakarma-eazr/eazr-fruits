import React, {useState, useEffect} from 'react'
import { ip } from "../../../config/config";
import axios from "axios";
import "../dashboard.scss";
function ShowTotalNumberOfPartner() {
  const [numberOfPartners, setNumberOfPartners] = useState();

  useEffect(() => {
    axios.get(`${ip}/partners/count`).then((res) => {
      setNumberOfPartners(res.data);
    });
  }, []);
  return <div>{!numberOfPartners ? 0 : numberOfPartners}</div>;
}

export default ShowTotalNumberOfPartner
