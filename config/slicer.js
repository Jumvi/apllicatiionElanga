// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
  },
  reducers: {
    setUserMail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUserMail } = authSlice.actions;
export default authSlice.reducer;
