import axios from "axios";
import { enqueueSnackbar } from "notistack";
axios.defaults.baseURL = "http://localhost:3004/api/";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // if (!expectedError) {
  //   enqueueSnackbar("An un expected error occured.", { variant: "error" });
  // }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
