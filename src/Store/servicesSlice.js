import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    storeServices(state, action) {
      return action.payload;
    },
  },
});

export const servicesActions = servicesSlice.actions;

export default servicesSlice.reducer;
