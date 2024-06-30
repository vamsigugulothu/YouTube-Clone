import { configureStore } from "@reduxjs/toolkit";
import allVideoListSlice from "./allVideoListSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    appData: appSlice,
    videosList: allVideoListSlice,
  },
});

export default store;
