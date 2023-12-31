import axios from "axios";

import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: JSON.stringify(import.meta.env.VITE_API_URL),
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  //handle tokken
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}),
  (error: any) => {
    //hendle error
    throw error;
  };

export default axiosClient;
