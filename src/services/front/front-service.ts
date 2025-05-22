import api from '@/services/api-client';
import { ApiResponse } from '../types';

export const blogs = async (): Promise<ApiResponse<any>> => {
  return await api.get(`/client/blogs`);
};

export const getBlogBySlug = async (
  slug: string
): Promise<ApiResponse<any>> => {
  return await api.get(`/client/blog/${slug}`);
};
