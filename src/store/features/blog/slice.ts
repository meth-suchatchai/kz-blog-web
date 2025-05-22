import { createSlice } from '@reduxjs/toolkit';

type BlogState = {
  data: [];
  loading: boolean;
};

const initialState: BlogState = {
  data: [],
  loading: false,
};

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
  },
  extraReducers: (builder) => {
    builder
      .addCase('blog/list/pending', (state) => {
        console.log('pending state: ', state);
        state.loading = true;
      })
      .addCase('blog/list/fulfilled', (state, action) => {
        console.log('fulfiled action: ', action);
        state.loading = false;
        state.data = action.payload;
      })
      .addCase('blog/list/rejected', (state, action) => {
        console.log('rejected action: ', action);
        state.loading = false;
      });
  },
});

// export const { list, getBySlug } = authenticationSlice.actions
export default authenticationSlice.reducer;
