// alertSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textAreaStyle: { backgroundColor: "white", color: "black" },
};

const textAreaStyleSlice = createSlice({
  name: "textAreaStyle",
  initialState,
  reducers: {
    setTextAreaStyle: (state, action) => {
      state.textAreaStyle = {
        backgroundColor: action.payload.backgroundColor,
        color: action.payload.color,
      };
    },
  },
});

export const { setTextAreaStyle } = textAreaStyleSlice.actions;

export default textAreaStyleSlice.reducer;
