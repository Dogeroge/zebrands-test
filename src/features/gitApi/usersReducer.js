import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
  total: 0,
  itemDetail: null,
};
export const usersReducer = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.items = !state.items ?
        action.payload.items :
        state.items.concat(action.payload.items);
      state.total = action.payload.total_count;
    },
    getUserDetails: (state, action) => {
      state.itemDetail = action.payload
    },
    clearState: (state) => {
      state.items = null
      state.total = 0
      state.itemDetail = null
    },
    clearUserDetails: (state) => {
      state.itemDetail = null
    },
  }
})

export const { getUsers, getUserDetails, clearState, clearUserDetails } = usersReducer.actions

export default usersReducer.reducer