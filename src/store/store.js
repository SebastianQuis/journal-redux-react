import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  devTools: true,
});

console.log(store.getState());
