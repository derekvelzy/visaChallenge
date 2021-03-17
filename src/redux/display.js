import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'Display',
  initialState: {
    display: 'desktop'
  },
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    }
  }
});

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;