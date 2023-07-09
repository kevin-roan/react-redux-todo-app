import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addtodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deltodo: (state, action) => {
      state.value = state.value.filter(
        (name, index) => index !== action.payload,
      );
    },
  },
});

export const { addtodo, deltodo } = todoSlice.actions;
export default todoSlice.reducer;
