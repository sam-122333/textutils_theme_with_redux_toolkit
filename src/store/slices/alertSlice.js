// alertSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.alert = {
        msg: action.payload.message,
        type: action.payload.type,
      };
    },
    hideAlert: (state) => {
      state.alert = null;
    },
  },
});

export const handleShowAlert = (message, type) => (dispatch) => {
  dispatch(showAlert({ message, type }));

  setTimeout(() => {
    dispatch(hideAlert());
  }, 1500);
};
export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
