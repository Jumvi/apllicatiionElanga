// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('token') || '';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    token: initialToken,
  },
  reducers: {
    setUserMail: (state, action) => {
      state.email = action.payload;
    },

    setToken:(state,action)=>{
      state.token = action.payload;

      localStorage.setItem('token',action.payload);
    },

    clearToken:(state,action)=>{
      state.token = '';

      localStorage.removeItem('token')
    }
  },
});

export const { setUserMail,setToken,clearToken } = authSlice.actions;
export default authSlice.reducer;
