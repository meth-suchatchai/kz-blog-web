import axios, { AxiosError } from 'axios';
import type { ErrorResponse } from './types';
import { store } from '@/store/store';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  headers: { 'KZ-API': process.env.NEXT_PUBLIC_KZ_API },
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return { success: true, ...response.data };
  },
  (error: AxiosError) => {
    if (error.response?.data && typeof error.response.data === 'object') {
      const data = error.response.data as ErrorResponse;
      return Promise.resolve({
        success: false,
        code: data.code,
        message: data.message,
      });
    }

    return Promise.reject({
      success: false,
      code: error.code,
      message: error.message,
    });
  }
);

export default api;
