import { server } from "../store/store";
import axios from "axios";
import { contactFail, contactSuccess } from "../slices/otherSlice";

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      config
    );
    dispatch(contactSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(contactFail(error.response.data.message));
  }
};

export const courseRequest = (name, email, course) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/courseRequest`,
      { name, email, course },
      config
    );
    dispatch(contactSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(contactFail(error.response.data.message));
  }
};
