import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
  total: 0,
}

export const reposReducer = createSlice({
  name: 'reposReducer',
  initialState,
  reducers: {
    getRepos: (state, action) => {
      state.items = !state.items ?
        action.payload.items :
        state.items.concat(action.payload.items);
      state.total = action.payload.total_count;
    },
    clearRepos: (state) => {
      state.items = null
      state.total = 0
    }
  }
})

export const { getRepos, clearRepos } = reposReducer.actions

export default reposReducer.reducer