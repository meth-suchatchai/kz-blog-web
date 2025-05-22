import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginAsyncThunk } from '../auth/action';

export type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncThunk.pending, (state) => {
        console.log('pending state: ', state);
        state.loading = true;
      })
      .addCase(loginAsyncThunk.fulfilled, (state, action) => {
        console.log('fulfiled action: ', action);
        state.loading = false;
        state.token = action.payload.access_token;
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        console.log('rejected action: ', action);
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
