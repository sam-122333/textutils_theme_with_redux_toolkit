// alertSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const myStyleSlice = createSlice({
  name: "myStyle",
  initialState,
  reducers: {
    setBtnStyle: (state, action) => action.payload,
  },
});

export const changeStyle = (color) => (dispatch) => {
  dispatch(setBtnStyle(color));
};

export const { setBtnStyle } = myStyleSlice.actions;

export default myStyleSlice.reducer;
