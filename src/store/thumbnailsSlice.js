import { createSlice } from '@reduxjs/toolkit';

const thumbnailsSlice = createSlice({
  name: 'thumbnails',
  initialState: [],
  reducers: {
    addThumbnail: (state, action) => {
      state.push(action.payload);
    },
    setThumbnails: (state, action) => {
      return action.payload;
    },
    clearThumbnails: (state) => {
      state.length = 0;
    },
  },
});

export const { addThumbnail, setThumbnails, clearThumbnails  } = thumbnailsSlice.actions;
export default thumbnailsSlice.reducer;