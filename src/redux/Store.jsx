import { configureStore } from "@reduxjs/toolkit";
import HumanSlice from "./HumanSlice";

const Store = configureStore({
  reducer: {
    human: HumanSlice.reducer
  }
});

export default Store;