import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'Contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    }
  }
});

export const { setContacts } = contactSlice.actions;

export default contactSlice.reducer;