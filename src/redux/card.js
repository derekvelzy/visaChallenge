import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'Card',
  initialState: {
    selectedEmail: '',
    lastEmail: '',
  },
  reducers: {
    setCard: (state, action) => {
      state.lastEmail = state.selectedEmail;
      state.selectedEmail = action.payload;
    }
  }
});

export const { setCard } = cardSlice.actions;

export default cardSlice.reducer;