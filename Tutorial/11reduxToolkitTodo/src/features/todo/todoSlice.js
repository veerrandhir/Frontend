// In redux we call reduxer as slice

import { createSlice, nanoid } from "@reduxjs/toolkit";

// Our Store Initail State

const initialState = {
  todos: [{ id: 1, text: "Hello world / first todo" }],
};

// we create Slice ver. of reducer

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // we have properties and fn in reducer
    addTodo: (state, action) => {
      // now create todo
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    }, // it is syntex

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.find((todo) => (todo.id = action.payload));
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => (todo.id = action.payload));
    },

    // In context api we always declare fn not defenation

    // here in redux we write whole defenation
  },
});

// we need to export reducer fnslty individually
export const { addTodo, removeTodo, deleteTodo, updateTodo } =
  todoSlice.actions;

// to aware store we need to export all slicer
export default todoSlice.reducer;
