import {
  allCoursesFail,
  allCoursesSuccess,
  getCourseFail,
  getCourseSuccess,
} from "../slices/courseSlice";
import { server } from "../store/store";
import axios from "axios";

export const getAllCourses =
  (category = "", keyword = "") =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );

      dispatch(allCoursesSuccess(data.courses));
      localStorage.setItem("user", JSON.stringify(data.courses));
    } catch (error) {
      dispatch(allCoursesFail(error.response.data.message));
    }
  };

export const getCourseLectures = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/course/${id}`, {
      withCredentials: true,
    });

    dispatch(getCourseSuccess(data.lectures));
    localStorage.setItem("user", JSON.stringify(data.lectures));
  } catch (error) {
    dispatch(getCourseFail(error.response.data.message));
  }
};
