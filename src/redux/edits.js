import { createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
  name: 'Edits',
  initialState: {
    id: '',
    editFirst: '',
    editLast: '',
    editPhone: '',
    editEmail: ''
  },
  reducers: {
    setContact: (state, action) => {
      console.log(action.payload);
      state.id = action.payload.id;
      state.editFirst = action.payload.first;
      state.editLast = action.payload.last;
      state.editPhone = action.payload.number;
      state.editEmail = action.payload.email;
    },
  }
});

export const { setContact } = editSlice.actions;

export default editSlice.reducer;