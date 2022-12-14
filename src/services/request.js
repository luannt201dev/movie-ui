import queryString from "query-string";

import axiosClient from "./axiosClient";

const request = (
  method = "GET",
  url = "/",
  data = { params: {}, body: null, form: null }
) => {
  return axiosClient({
    url,
    method,
    data: data.body || data.form,
    params: data.params,
    paramsSerializer: (params) => {
      return queryString.stringify(params);
    }
  });
};

export default request;