import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: ["ludan"],
  },
  reducers: {
    addtodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deltodo: (state) => {
      state.value += 1;
    },
  },
});

export const { addtodo, deltodo } = todoSlice.actions;
export default todoSlice.reducer;
