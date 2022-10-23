import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  itemDetail: null,
};
export const usersReducer = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.items = state.items.concat(action.payload.items)
      state.total = action.payload.total_count;
    },
    getUserDetails: (state, action) => {
      state.itemDetail = action.payload
    },
    clearState: (state) => {
      state.items = []
      state.total = 0
      state.itemDetail = null
    }
  }
})

export const { getUsers, getUserDetails,clearState } = usersReducer.actions

export default usersReducer.reducer