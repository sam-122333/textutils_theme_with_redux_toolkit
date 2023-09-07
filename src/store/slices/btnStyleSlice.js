// alertSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const btnStyleSlice = createSlice({
  name: "btnStyle",
  initialState,
  reducers: {
    setBtnStyle: (state, action) => action.payload,
  },
});

export const changeBtnStyle = (color) => (dispatch) => {
  dispatch(setBtnStyle(color));
};

export const { setBtnStyle } = btnStyleSlice.actions;

export default btnStyleSlice.reducer;
