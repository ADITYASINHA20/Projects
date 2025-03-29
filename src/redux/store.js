import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./querySlice";

const store = configureStore({
  reducer: {
    query: queryReducer, // Reducer ko add kiya
  },
});

export default store;
