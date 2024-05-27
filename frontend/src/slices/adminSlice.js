import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    getAdminStatsSuccess: (state, action) => {
      return {
        stats: action.payload.stats,
        viewsCount: action.payload.viewsCount,
        subscriptionCount: action.payload.subscriptionCount,
        usersCount: action.payload.usersCount,
        subscriptionPercentage: action.payload.subscriptionPercentage,
        viewsPercentage: action.payload.viewsPercentage,
        usersPercentage: action.payload.usersPercentage,
        subscriptionProfit: action.payload.subscriptionProfit,
        viewsProfit: action.payload.viewsProfit,
        usersProfit: action.payload.usersProfit,
      };
    },
    getAdminStatsFail: (state, action) => {
      return { error: action.payload };
    },
    getAllUsersSuccess: (state, action) => {
      return { users: action.payload };
    },
    getAllUsersFail: (state, action) => {
      return { error: action.payload };
    },
    updateUserRoleSuccess: (state, action) => {
      return { message: action.payload };
    },
    updateUserRoleFail: (state, action) => {
      return { error: action.payload };
    },
    deleteUserSuccess: (state, action) => {
      return { message: action.payload };
    },
    deleteUserFail: (state, action) => {
      return { error: action.payload };
    },

    createCourseSuccess: (state, action) => {
      return { message: action.payload };
    },
    createCourseFailure: (state, action) => {
      return { error: action.payload };
    },
    deleteCourseSuccess: (state, action) => {
      return { message: action.payload };
    },
    deleteCourseFailure: (state, action) => {
      return { error: action.payload };
    },
    addLectureSuccess: (state, action) => {
      return { message: action.payload };
    },
    addLectureFail: (state, action) => {
      return { error: action.payload };
    },
    deleteLectureSuccess: (state, action) => {
      return { message: action.payload };
    },
    deleteLectureFail: (state, action) => {
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
  createCourseSuccess,
  createCourseFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
  addLectureSuccess,
  addLectureFail,
  deleteLectureSuccess,
  deleteLectureFail,
  getAdminStatsSuccess,
  getAdminStatsFail,
  getAllUsersSuccess,
  getAllUsersFail,
  updateUserRoleSuccess,
  updateUserRoleFail,
  deleteUserSuccess,
  deleteUserFail,
  clearError,
  clearMessage,
} = adminSlice.actions;
