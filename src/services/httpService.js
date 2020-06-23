import axios from "axios";
import auth from "./userService";

// axios.default.headers.common["x-auth-token"] = auth.getJwt();
axios.interceptors.request.use(function (config) {
  config.headers["auth-token"] = auth.getJwt(); // auth-token is used based on the backend
  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
