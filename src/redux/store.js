import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './card.js';
import contactReducer from './contacts.js';
import modalReducer from './modal.js';

export default configureStore({
  reducer: {
    card: cardReducer,
    contact: contactReducer,
    modal: modalReducer
  }
});