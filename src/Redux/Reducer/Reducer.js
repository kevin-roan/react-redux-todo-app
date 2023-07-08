import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: 2,
  },
  reducers: {
    addtodo: (state) => {
      state.value("addtodo");
    },
    deltodo: (state) => {
      state.value("remove");
    },
  },
});

export const { addtodo, deltodo } = todoSlice.actions;
export default todoSlice.reducer;
