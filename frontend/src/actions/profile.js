import {
  changePasswordFail,
  changePasswordSuccess,
  forgetPasswordFail,
  forgetPasswordSuccess,
  removeFromPlaylistFail,
  removeFromPlaylistSuccess,
  resetPasswordFail,
  resetPasswordSuccess,
  updateProfileFail,
  updateProfilePictureFail,
  updateProfilePictureSuccess,
  updateProfileSuccess,
} from "../slices/userSlice";
import { addToPlaylistFail, addToPlaylistSuccess } from "../slices/courseSlice";
import { server } from "../store/store";
import axios from "axios";

export const updateProfile = (name, email) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `${server}/updateProfile`,
      { name, email },
      {
        headers: {
          "Content-type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch(updateProfileSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const updateProfilePicture = (formdata) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `${server}/updateProfilePicture`,
      formdata,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },

        withCredentials: true,
      }
    );

    dispatch(updateProfilePictureSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(updateProfilePictureFail(error.response.data.message));
  }
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${server}/changePassword`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch(changePasswordSuccess(data.message));
      localStorage.setItem("user", JSON.stringify(data.message));
    } catch (error) {
      dispatch(changePasswordFail(error.response.data.message));
    }
  };

export const forgetPassword = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/forgetPassword`,
      { email },
      config
    );

    dispatch(forgetPasswordSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(forgetPasswordFail(error.response.data.message));
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/resetPassword/${token}`,
      { password },
      config
    );

    dispatch(resetPasswordSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(resetPasswordFail(error.response.data.message));
  }
};

export const addToPlaylist = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/addToPlaylist`,
      { id },
      config
    );

    dispatch(addToPlaylistSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(addToPlaylistFail(error.response.data.message));
  }
};

export const removeFromPlaylist = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/removeFromPlaylist?id=${id}`,

      config
    );

    dispatch(removeFromPlaylistSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(removeFromPlaylistFail(error.response.data.message));
  }
};
