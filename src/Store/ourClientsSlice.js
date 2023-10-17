import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const ourClientsSlice = createSlice({
  name: "ourClients",
  initialState,
  reducers: {
    storeOurClients(state, action) {
      return action.payload;
    },
  },
});

export const ourClientsActions = ourClientsSlice.actions;

export default ourClientsSlice.reducer;
