import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginAsync} from "@/redux/features/auth/action";

export type AuthState = {
    isAuthenticated: boolean;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state) => {
            state.loading = true
        })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })

    }
})

export const { setToken } = authSlice.actions
export default authSlice.reducer