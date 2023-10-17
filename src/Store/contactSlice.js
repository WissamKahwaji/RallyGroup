import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    storeContact(state, action) {
      return action.payload;
    },
  },
});

export const contactActions = contactSlice.actions;

export default contactSlice.reducer;
