import { createSlice } from "@reduxjs/toolkit";

export const otherSlice = createSlice({
  name: "other",
  initialState: {},
  reducers: {
    contactSuccess: (state, action) => {
      return { message: action.payload };
    },
    contactFail: (state, action) => {
      return { error: action.payload };
    },
    courseRequestSuccess: (state, action) => {
      return { message: action.payload };
    },
    courseRequestFail: (state, action) => {
      return { error: action.payload };
    },
    clearError: (state) => {
      return (state.error = null);
    },
    clearMessage: (state) => {
      return (state.message = null);
    },
  },
});

export const {
  contactSuccess,
  contactFail,
  courseRequestSuccess,
  courseRequestFail,
  clearError,
  clearMessage,
} = otherSlice.actions;
