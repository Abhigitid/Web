import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      return {
        isAuthenticated: true,
        user: action.payload.user,
        message: action.payload.message,
      };
    },
    loginFail: (state, action) => {
      return { error: action.payload, isAuthenticated: false };
    },

    registerSuccess: (state, action) => {
      return {
        isAuthenticated: true,
        user: action.payload.user,

        message: action.payload.message,
      };
    },
    registerFail: (state, action) => {
      return {
        error: action.payload,

        isAuthenticated: false,
      };
    },

    logoutSuccess: (state, action) => {
      return {
        isAuthenticated: false,
        message: action.payload,
        user: null,
      };
    },
    logoutFail: (state, action) => {
      return {
        error: action.payload,
        isAuthenticated: true,
        message: action.payload,
      };
    },

    loadUserSuccess: (state, action) => {
      return { isAuthenticated: true, user: action.payload };
    },
    loadUserFail: (state, action) => {
      return { error: action.payload, isAuthenticated: false };
    },
    clearError: (state) => {
      return (state.error = null);
    },
    clearMessage: (state) => {
      return (state.message = null);
    },
  },
});
export const profileSlice = createSlice({
  name: "profile",
  initialState: {},

  reducers: {
    updateProfileSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    updateProfileFail: (state, action) => {
      return { error: action.payload };
    },
    updateProfilePictureSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    updateProfilePictureFail: (state, action) => {
      return { error: action.payload };
    },
    changePasswordSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    changePasswordFail: (state, action) => {
      return { error: action.payload };
    },
    forgetPasswordSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    forgetPasswordFail: (state, action) => {
      return { error: action.payload };
    },
    resetPasswordSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    resetPasswordFail: (state, action) => {
      return { error: action.payload };
    },
    removeFromPlaylistSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    removeFromPlaylistFail: (state, action) => {
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

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {},

  reducers: {
    buySubscriptionSuccess: (state, action) => {
      return {
        subscriptionId: action.payload,
      };
    },
    buySubscriptionFail: (state, action) => {
      return {
        error: action.payload,
      };
    },
    cancelSubscriptionSuccess: (state, action) => {
      return {
        message: action.payload,
      };
    },
    cancelSubscriptionFail: (state, action) => {
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
  loginSuccess,
  loginFail,
  registerSuccess,
  registerFail,
  logoutSuccess,
  logoutFail,
  loadUserSuccess,
  loadUserFail,
  clearError,
  clearMessage,
} = userSlice.actions;
export default userSlice.reducer;

export const {
  updateProfileSuccess,
  updateProfileFail,
  updateProfilePictureSuccess,
  updateProfilePictureFail,
  changePasswordSuccess,
  changePasswordFail,
  forgetPasswordSuccess,
  forgetPasswordFail,
  resetPasswordSuccess,
  resetPasswordFail,
  removeFromPlaylistSuccess,
  removeFromPlaylistFail,
} = profileSlice.actions;

export const {
  buySubscriptionSuccess,
  buySubscriptionFail,
  cancelSubscriptionSuccess,
  cancelSubscriptionFail,
} = subscriptionSlice.actions;
