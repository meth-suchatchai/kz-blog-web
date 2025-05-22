import { RootState } from '@/store/store';

export const selectorAuth = (state: RootState) => state.auth;
export const selectorIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
