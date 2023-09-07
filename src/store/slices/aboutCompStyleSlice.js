// alertSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutCompStyle: { backgroundColor: "white", color: "black" },
};

const aboutCompStyleSlice = createSlice({
  name: "aboutCompStyle",
  initialState,
  reducers: {
    setAboutCompStyle: (state, action) => {
      state.aboutCompStyle = {
        backgroundColor: action.payload.backgroundColor,
        color: action.payload.color,
      };
    },
  },
});

export const { setAboutCompStyle } = aboutCompStyleSlice.actions;

export default aboutCompStyleSlice.reducer;
