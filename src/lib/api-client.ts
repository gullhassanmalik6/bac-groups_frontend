import axios, { type AxiosError, type AxiosInstance } from "axios";
import type { ApiResponse } from "@/types";

const baseURL = (import.meta.env.VITE_API_BASE_URL as string) || "/api/v1";

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 30_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiResponse<unknown>>) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "An unexpected network error occurred.";

    return Promise.reject(new Error(message));
  },
);

export async function getData<T>(url: string, params?: Record<string, unknown>): Promise<T> {
  const response = await apiClient.get<ApiResponse<T>>(url, { params });
  return response.data.data;
}

export async function postData<T, B = unknown>(url: string, body: B): Promise<T> {
  const response = await apiClient.post<ApiResponse<T>>(url, body);
  return response.data.data;
}
