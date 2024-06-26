import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  subject: "",
  time: "",
};
const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {},
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
