import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./Slice/mailSlice";
const store=configureStore({
  reducer:mailSlice
})

export default store;