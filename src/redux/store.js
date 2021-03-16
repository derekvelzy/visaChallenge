import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './card.js';

export default configureStore({
  reducer: {
    card: cardReducer,
  }
})