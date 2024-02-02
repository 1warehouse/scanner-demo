import createAxiosInstance from 'src/utils/createAxiosInstance';

export const baseAPI = createAxiosInstance(process.env.REACT_APP_BASE_API_URL);
