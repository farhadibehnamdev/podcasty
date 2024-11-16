import { API_URL } from "@/configs/globals";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";

const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response.status;
      if (statusCode === 404) {
        throw { message: "Not found error." };
      }
      if (statusCode === 403) {
        throw { message: "Unauthorization error." };
      }
    } else {
      throw { message: "Network error." };
    }
  }
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response.data;
}

async function readData<T>(
  url: string,
  headers?: RawAxiosRequestHeaders
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "GET",
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: RawAxiosRequestHeaders
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "POST",
    headers,
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

export { readData, createData };
