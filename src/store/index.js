import { configureStore, combineReducers } from "@reduxjs/toolkit";
import alertSlice from "./slices/alertSlice";
import myStyleSlice from "./slices/myStyleSlice";
import btnStyleSlice from "./slices/btnStyleSlice";
import textAreaStyleSlice from "./slices/textAreaStyle";
import aboutCompStyleSlice from "./slices/aboutCompStyleSlice";

const rootReducer = combineReducers({
  alert: alertSlice,
  myStyle: myStyleSlice,
  btnStyle: btnStyleSlice,
  textAreaStyle: textAreaStyleSlice,
  aboutCompStyle: aboutCompStyleSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
