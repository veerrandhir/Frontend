import { configureStore } from "@reduxjs/toolkit";
// Store need knowledge of reducer to fn upon

import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
