import { createSlice } from "@reduxjs/toolkit";

const getUser = () => {
    const userJson = localStorage.getItem("user");
    return userJson !== null ? JSON.parse(userJson) : null
  }

const initialState = {
    user: getUser(),
    isLogin: getUser() !== null,
    registerSuccess: false,
    accessToken: localStorage.getItem("token") || null,
    error: null,
    loadingLogin: false,
    loadingRegister: false,
    refresh_token: localStorage.getItem("refresh_token") || null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
      loginStart(state) {
        state.loadingLogin = true;
        state.error = null;
      },
      loginSuccess(state, action){
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token)
        localStorage.setItem("refreshToken", action.payload.refreshToken)
        state.user = action.payload.user;
        state.isLogin = true;
        state.accessToken = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.loadingLogin = false;
        state.error = null;
      },
      loginFailure(state){
        state.loadingLogin = false;
        state.error = "Tài khoản hoặc mật khẩu không đúng!"
      },
      registerStart(state) {
        state.loadingRegister = true;
        state.error = null;
      },
      registerSuccess(state, action){
        state.registerSuccess = true
        state.loadingRegister = false;
        state.error = null;
      },
      registerFailure(state, action){
        state.loadingRegister = false;
        state.error = action.payload.message
      },
      logout(state, action){
        localStorage.removeItem("token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("user")
        state.user = null;
        state.isLogin = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.loadingLogin = false;
        state.error = action.payload.err
      }
    },
  });
  
  export default authSlice;