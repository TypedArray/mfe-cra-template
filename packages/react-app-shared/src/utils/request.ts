import axios from 'axios';

/**
 * 配置 request 请求时的默认参数
 */
const request = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

request.interceptors.request.use(config => {
  return config;
});

request.interceptors.response.use(response => {
  return response;
});

export default request;
