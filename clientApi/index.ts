import axiosBackendClient, { axiosBaseUrl } from "util/axios";
import { DefaultApi } from "./.generated";

export const API = new DefaultApi(
  {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  },
  undefined,
  axiosBackendClient
);
