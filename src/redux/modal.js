import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'Modal',
  initialState: {
    open: false,
    id: '',
    name: '',
    email: '',
  },
  reducers: {
    setModal: (state, action) => {
      if (action.payload === '') {
        state.open = false;
        state.id = '';
        state.name = '';
        state.email = '';
      } else {
        state.open = true;
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
      }
    }
  }
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;