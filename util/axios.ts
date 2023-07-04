import axios, { AxiosRequestConfig } from "axios";

//!add /api/ export const axiosBaseUrl = `${process.env.REACT_APP_BACKEND_URL}/api`;
export const axiosBaseUrl = `${process.env.REACT_APP_BACKEND_URL}`;

export const axiosConfig: AxiosRequestConfig = {
  baseURL: axiosBaseUrl,
};

const axiosBackendClient = axios.create(axiosConfig);

export default axiosBackendClient;
