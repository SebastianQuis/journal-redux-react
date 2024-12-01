import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-authenticated", // 'checking' | 'no-authenticated" | "authenticated"
    uid: null,
    email: null,
    photoURL: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      // 'checking' | 'no-authenticated" | "authenticated"
      state.status = "authenticated";
      state.uid = payload.user.uid;
      state.email = payload.user.email;
      state.photoURL = payload.user.photoURL;
      state.displayName = payload.user.displayName;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "no-authenticated";
      state.uid = null;
      state.email = null;
      state.photoURL = null;
      state.displayName = null;
      state.errorMessage = payload.error;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
