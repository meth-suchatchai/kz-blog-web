import { blogs, getBlogBySlug } from '@/services/front/front-service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const blogsAsyncThunk = createAsyncThunk(
  'client/blogs',
  async ({}, { rejectWithValue }) => {
    try {
      const response = await blogs();
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(`${response.code} ${response.message}`);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const blogBySlugAsyncThunk = createAsyncThunk(
  'client/blog',
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await getBlogBySlug(slug);
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(`${response.code} ${response.message}`);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
