import { createSlice } from "@reduxjs/toolkit";

export const notifReducer = createSlice({
  name: 'notifReducer',
  initialState: {
    isOpen: false,
    type: 'secondary',
    title: '',
    message: '',
  },
  reducers: {
    showNotification: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type
      state.title = action.payload.type ?
        action.payload.type :
        'secondary';
      state.title = action.payload.title ?
        action.payload.title : '' 
      state.message = action.payload.title ?
        action.payload.message : '' 
    },
    closeNotification: (state) => {
      state.isOpen = false;
    }
  }
})

export const { showNotification, closeNotification } = notifReducer.actions

export default notifReducer.reducer