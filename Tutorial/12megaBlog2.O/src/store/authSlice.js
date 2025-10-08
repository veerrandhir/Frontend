import { createSlice } from "@reduxjs/toolkit";

// it is to track user is authenticated or not

const initialState = {
  status: false, // user is not authenticated yet
  userData: null, // there is no user data we have initially
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // login called as action
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      // logout called as action

      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions; // the actions exported here acutally recucer: login and logout

export default authSlice.reducer;
