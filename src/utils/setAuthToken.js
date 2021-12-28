import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    //Apply to every request
<<<<<<< HEAD
    axios.defaults.headers.common["Authorization"] =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY29udGFjdE51bWJlciI6Ijg5MjgzMzc3MzkiLCJ0aW1lc3RhbXAiOiIxNjQwNjc1NTk2MzQ0IiwiaWF0IjoxNjQwNjc1NTk2LCJleHAiOjE2NDkxNDI3OTZ9.RwelAgrcfTjHNV162lbqUy6hsCj3_29A0LXEhRZcbrY";
=======
    axios.defaults.headers.common["Authorization"] = token;
>>>>>>> 24448d50d3e681f61c1b62ad06370c2e692e12f1
  } else {
    //Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
