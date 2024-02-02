import axios from 'axios';
import Cookies from 'js-cookie';
import { cookieAttributes } from 'src/configs/constants';
import { history } from 'src/router/history';

const createAxiosInstance = (baseURL) => {
  const API = axios.create({
    baseURL,
  });

  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { response } = error;
      if (response?.status === 401) {
        try {
          Cookies.remove('_auth', cookieAttributes);
        } catch (e) {
          // empty
        }

        history.push('/auth');
      }

      if (response?.status === 403) {
        Cookies.remove('_auth', cookieAttributes);
        history.push('/auth');
      }
      return Promise.reject(error);
    },
  );

  API.interceptors.request.use(async (config) => {
    const requestConfig = { ...config };
    try {
      const authData = JSON.parse(Cookies.get()['_auth']);

      if (authData.accessToken) {
        requestConfig.headers.Authorization = `Bearer ${authData.accessToken}`;
      }
    } catch (err) {
      // empty
    }
    return requestConfig;
  });

  return API;
};

export default createAxiosInstance;
