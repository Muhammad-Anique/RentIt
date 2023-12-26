import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  password: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = null;
      state.password = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;


export const selectUsername = (state) => state.auth.username;
export const selectPassword = (state) => state.auth.password;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;