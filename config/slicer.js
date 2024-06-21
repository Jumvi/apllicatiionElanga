import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

let initialUser = null;
const storedUser = localStorage.getItem('user');


if (storedUser) {
  try {
    initialUser = JSON.parse(storedUser);
  } catch (error) {
    console.error("Error parsing stored user:", error);
    initialUser = null;
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    token: '',
    user: initialUser,
    isConnect:false,
    projet:''
  },
  reducers: {
    setUserMail: (state, action) => {
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = '';
      localStorage.removeItem('token');
    },
    saveUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },

    checkConnect:(state)=>{
      state.isConnect = true;
      localStorage.setItem('isConnect',true);
    },
      checkIsDisconnect:(state)=>{
        state.isConnect = false;
        localStorage.setItem('isConnect',false)
      }, 
      addprojet:(state,action)=>{
        state.projet =action.payload;
        localStorage.setItem('project',action.payload);
      },

      delProject:(state)=>{
        state.projet = '';
        localStorage.removeItem('project');
      }
    
  },
});

export const { setUserMail, setToken, clearToken, saveUser, clearUser,checkConnect,checkIsDisconnect,addprojet,delProject} = authSlice.actions;
export default authSlice.reducer;
