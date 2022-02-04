import axios from "axios";
import React, { useEffect, useState } from "react";
import { ip } from "../../config/config";
const TotalPartnerCategories = () => {
  const [numberofPartnerCategories, setNumberofPartnerCategories] = useState(0);
  useEffect(() => {
    axios
    .get(`${ip}/partner-category/count`)
    .then((res) => {
      setNumberofPartnerCategories(res.data);
    });
  }, []);

  return <>
  {!numberofPartnerCategories ? 0 : numberofPartnerCategories}
  </>;
};
export default TotalPartnerCategories;
