import { createSlice } from "@reduxjs/toolkit";

// to track user authentication

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //in reducer  these fields like login and all are actions so we export these in name of it

    login: (state, action) => {
      (state.status = true), (state.userData = action.payload.userData);
    },
    logout: (state) => {
      state.status = true;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
