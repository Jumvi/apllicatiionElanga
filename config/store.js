// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
