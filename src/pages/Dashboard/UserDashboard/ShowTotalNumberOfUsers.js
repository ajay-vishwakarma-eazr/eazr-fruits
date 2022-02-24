import axios from "axios";
import React, { useEffect, useState } from "react";
import { ip } from "../../../config/config";
const ShowTotalNumberOfUsers = () => {
  const [numberofUsers, setNumberofUsers] = useState(0);
  useEffect(() => {
    axios.get(`${ip}/users/count`)
    .then((res) => {
      setNumberofUsers(res.data);
    });
  }, []);

  return <>{!numberofUsers ? 0 : numberofUsers}</>;
};
export default ShowTotalNumberOfUsers;
// kamlesh
