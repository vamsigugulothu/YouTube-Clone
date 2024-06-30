import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleShowSidebar: (state, payload) => {
      state.showSidebar = !state.showSidebar;
    },
    closeSidebar: (state, payload) => {
      state.showSidebar = false;
    },
  },
});

export const { toggleShowSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
