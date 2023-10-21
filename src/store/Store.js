import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../Component/Model/slice/filter-slice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});
