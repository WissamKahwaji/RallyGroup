import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    storeCar(state, action) {
      return action.payload;
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
