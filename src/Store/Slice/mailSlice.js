import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageOpen: false,
};
const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage(state) {
      state.sendMessageOpen = true;
    },
    closeSendMessage(state) {
      state.sendMessageOpen = false;
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
