import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios.instance";

interface LoginResponse {
    token: string;
}

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (credentials: {username: string, password: string}, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.post<LoginResponse>(``, credentials);
            return response.data.token
        } catch (error) {
            return rejectWithValue(`login failed ${error}`)
        }
    }
)

// export const logout = () => {
//     return (dispatch: AppDispatch) => {
//
//     }
// }