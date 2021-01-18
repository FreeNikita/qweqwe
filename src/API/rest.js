import axios from 'axios';
import { BASIC_URL } from 'config/api';

function post({ url, data, ...options }) {
  const headers = options.headers || {};
  return axios({
    url: `${BASIC_URL}${url}`, method: 'POST', data, headers,
  })
    .then(({ data }) => data);
}

export default {
  post,
};
