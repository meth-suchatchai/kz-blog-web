export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; code: number; message: string };

export type ErrorResponse = {
  code: number;
  message: string;
};
