import {
  addLectureFail,
  addLectureSuccess,
  createCourseFailure,
  createCourseSuccess,
  deleteCourseFailure,
  deleteCourseSuccess,
  deleteLectureFail,
  deleteLectureSuccess,
  deleteUserFail,
  deleteUserSuccess,
  getAdminStatsFail,
  getAdminStatsSuccess,
  getAllUsersFail,
  getAllUsersSuccess,
  updateUserRoleFail,
  updateUserRoleSuccess,
} from "../slices/adminSlice";
import { server } from "../store/store";
import axios from "axios";

export const createCourse = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/createCourse`,
      formdata,
      config
    );
    dispatch(createCourseSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(createCourseFailure(error.response.data.message));
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${server}/course/${id}`,

      config
    );
    dispatch(deleteCourseSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(deleteCourseFailure(error.response.data.message));
  }
};
export const addLecture = (id, formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/course/${id}`,
      formdata,
      config
    );
    dispatch(addLectureSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(addLectureFail(error.response.data.message));
  }
};

export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,

      config
    );
    dispatch(deleteLectureSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(deleteLectureFail(error.response.data.message));
  }
};
export const getAllUsers = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${server}/admin/users`,

      config
    );
    dispatch(getAllUsersSuccess(data.users));
    localStorage.setItem("user", JSON.stringify(data.users));
  } catch (error) {
    dispatch(getAllUsersFail(error.response.data.message));
  }
};

export const updateUserRole = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.put(
      `${server}/admin/user/${id}`,
      {},

      config
    );
    dispatch(updateUserRoleSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(updateUserRoleFail(error.response.data.message));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(
      `${server}/admin/user/${id}`,

      config
    );
    dispatch(deleteUserSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(deleteUserFail(error.response.data.message));
  }
};

export const getDashboardStats = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    const { data } = await axios.get(
      `${server}/admin/stats`,

      config
    );
    dispatch(getAdminStatsSuccess(data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(getAdminStatsFail(error.response.data.message));
  }
};
