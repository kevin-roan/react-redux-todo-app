import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducer/Reducer";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
