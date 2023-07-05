import axiosBackendClient from "util/axios";
import { BACKEND_URL } from "../util/constants";
import { DefaultApi } from "./.generated";

export const API = new DefaultApi(
  {
    isJsonMime: () => false,
    basePath: BACKEND_URL,
  },
  undefined,
  // `${BACKEND_URL}`,
  axiosBackendClient
);
