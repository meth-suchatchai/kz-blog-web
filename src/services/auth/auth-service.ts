import { LoginReq, LoginRes } from '@/types/auth.model';
import api from '../api-client';
import { ApiResponse } from '../types';

export const login = async (data: LoginReq): Promise<ApiResponse<LoginRes>> => {
  return await api.post('/client/login', data);
};
