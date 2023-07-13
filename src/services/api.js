import axios from "axios";

const API_KEY = "80807fd3c2mshd9562466f6d4db1p1bdde0jsn093b54c362f8"; // Replace with your RapidAPI key
const config = {
  headers: {
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
  },
};

const fetchDataFromAPI = (endpoint, params = {}) => {
  return axios.get("https://weatherapi-com.p.rapidapi.com/" + endpoint, {
    config,
    params: {
      ...params,
    },
  });
};

// const fetchDataFromAPI = (request, endpoint, data = {}) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };

//   switch (request) {
//     case "GET":
//       return axios.get(baseUrl + endpoint, config);

//     case "POST":
//       return axios.post(baseUrl + endpoint, data, config);

//     case "PUT":
//       return axios.put(baseUrl + endpoint, data, config);

//     case "DELETE":
//       return axios.delete(baseUrl + endpoint, config);

//     default:
//       return Promise.reject("Invalid request method");
//   }
// };

export default fetchDataFromAPI;
