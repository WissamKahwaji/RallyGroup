import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colorsSlice";
import homeSlice from "./homeSlice";
import servicesSlice from "./servicesSlice";
import contactSlice from "./contactSlice";
import carSlice from "./carSlice";
import ourClientsSlice from "./ourClientsSlice";

const store = configureStore({
  reducer: {
    colorsSlice: colorsSlice,
    homeSlice: homeSlice,
    servicesSlice: servicesSlice,
    contactSlice: contactSlice,
    carSlice: carSlice,
    ourClientsSlice: ourClientsSlice,
  },
});

export default store;
