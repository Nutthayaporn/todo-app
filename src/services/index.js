import axios from "axios";

const fetchApi = ({
  method = "GET",
  url = null,
  data = null,
  headers = {
    "Content-Type": "application/json",
  },
  params = null,
}) => {
  return axios({
    method,
    baseURL: `${process.env.REACT_APP_SERVICE_URL}/`,
    url,
    data,
    headers,
    params,
  });
};

export { fetchApi };
