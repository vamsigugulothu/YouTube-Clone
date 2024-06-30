import { configureStore } from "@reduxjs/toolkit";
import allVideoListSlice from "./allVideoListSlice";

const store = configureStore({
  reducer: {
    videosList: allVideoListSlice,
  },
});

export default store;
