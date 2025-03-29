import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [], // Query history ko store karne ke liye
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      state.history.unshift(action.payload); // Naya query add karega
    },
    clearHistory: (state) => {
      state.history = []; // Poora history clear karega
    },
  },
});

export const { addQuery, clearHistory } = querySlice.actions;
export default querySlice.reducer;
