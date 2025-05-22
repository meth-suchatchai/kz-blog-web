import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '@/services/auth/auth-service';

export const loginAsyncThunk = createAsyncThunk(
  'auth/login',
  async (
    credentials: { mobile_number: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await login(credentials);
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
