import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

let initialUser = null;
const storedUser = localStorage.getItem('user');

let initialManageUser = null;
const storeManageUser = localStorage.getItem('manageUser');

let initProject = null;
let storeProject = localStorage.getItem('projet');

let initialContribution = null;
let storeContribution = localStorage.getItem('ontribution');


let initToken = null;
const storeToken = localStorage.getItem('token');

if (storeToken) {
  try {
    initToken = JSON.parse(storeToken);
  } catch (error) {
    console.log("Error parsing stored token:",error);
    initToken = null;
  }
}


if (storeContribution) {
  try {
    initialContribution = JSON.parse(storeContribution);
  } catch (error) {
    console.error("Error parsing stored user:", error);
    initialContribution = null;
  }
}

if(storeProject){
  try {
    initProject = JSON.parse(storeProject);
  } catch (error) {
    console.error("Error parsing stored user:", error);
    initProject = null;
  }
}


if (storeManageUser) {
  try {
    initialManageUser = JSON.parse(storeManageUser);
  } catch (error) {
    console.error("Error parsing stored user:", error);
    initialManageUser = null;
  }
}


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
    token: initToken,
    user: initialUser,
    manageUser : initialManageUser ,
    isConnect:false,
    projet:initProject,
    contribution: initialContribution
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
        localStorage.setItem('projet',JSON.stringify(action.payload));
      },

      delProject:(state)=>{
        state.projet = '';
        localStorage.removeItem('projet');
      },
      addManagingUser:(state,action)=>{
        state.manageUser = action.payload;
        localStorage.setItem('manageUser',JSON.stringify(action.payload));
      },

      removeManagingUser:(state)=>{
        state.manageUser = "";
        localStorage.removeItem('manageUser');
      },
        addContribution :(state,action)=>{
          state.contribution = action.payload;
          localStorage.setItem('contribution',JSON.stringify(action.payload))
        }

    
  },
});

export const { setUserMail, setToken, clearToken, saveUser, clearUser,checkConnect,checkIsDisconnect,addprojet,delProject,addManagingUser,removeManagingUser,addContribution} = authSlice.actions;
export default authSlice.reducer;
