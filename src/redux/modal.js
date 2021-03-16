import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'Modal',
  initialState: {
    open: false,
    name: '',
    email: '',
  },
  reducers: {
    setModal: (state, action) => {
      if (action.payload === '') {
        state.open = false;
        state.name = action.payload;
        state.email = action.payload;
      } else {
        state.open = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
      }
    }
  }
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;