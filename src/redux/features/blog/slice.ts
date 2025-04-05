import {createSlice} from "@reduxjs/toolkit";

type BlogState = {
    data: [];
    loading: boolean;
}

const initialState: BlogState = {
    data: [],
    loading: false,
}

const authenticationSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        // list: async (state, action) => {
        //     console.log(state, action.payload)
        // },
        // getBySlug: async (state) => {
        //     console.log(state)
        // }
    }
})

// export const { list, getBySlug } = authenticationSlice.actions
export default authenticationSlice.reducer