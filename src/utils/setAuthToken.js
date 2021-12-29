import axios from "axios";

const setAuthToken = (accessToken) => {
  if (accessToken) {
    //Apply to every request

    
    axios.defaults.headers.common["Authorization"] ="Bearer " + accessToken;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
