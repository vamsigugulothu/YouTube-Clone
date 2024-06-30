import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "allVideos",
  initialState: {
    data: null,
  },
  reducers: {
    getAllVideosSuccess: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getAllVideosSuccess } = videoSlice.actions;

export default videoSlice.reducer;
