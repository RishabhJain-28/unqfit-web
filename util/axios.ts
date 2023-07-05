import axios, { AxiosRequestConfig } from "axios";
import { BACKEND_URL } from "./constants";

//!add /api/ export const axiosBaseUrl = `${process.env.REACT_APP_BACKEND_URL}/api`;
// export const axiosBaseUrl = `${process.env.REACT_APP_BACKEND_URL}`;
export const axiosConfig: AxiosRequestConfig = {
  baseURL: BACKEND_URL,
};

const axiosBackendClient = axios.create(axiosConfig);

export default axiosBackendClient;
