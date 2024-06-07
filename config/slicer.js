import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { setUserMail, setToken, clearToken, saveUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
