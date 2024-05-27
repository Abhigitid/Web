import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  lectures: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,

  reducers: {
    allCoursesSuccess: (state, action) => {
      return {
        courses: action.payload,
      };
    },
    allCoursesFail: (state, action) => {
      return {
        error: action.payload,
      };
    },
    getCourseSuccess: (state, action) => {
      return {
        lectures: action.payload,
      };
    },
    getCourseFail: (state, action) => {
      return {
        error: action.payload,
      };
    },
    addToPlaylistSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    addToPlaylistFail: (state, action) => {
      return {
        error: action.payload,
      };
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
  allCoursesSuccess,
  allCoursesFail,
  getCourseSuccess,
  getCourseFail,
  addToPlaylistSuccess,
  addToPlaylistFail,
  clearError,
  clearMessage,
} = courseSlice.actions;
