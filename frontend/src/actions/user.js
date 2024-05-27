import { server } from "../store/store";
import axios from "axios";
import {
  loginSuccess,
  loginFail,
  registerSuccess,
  registerFail,
  loadUserFail,
  loadUserSuccess,
  logoutSuccess,
  logoutFail,
  buySubscriptionSuccess,
  buySubscriptionFail,
  cancelSubscriptionSuccess,
  cancelSubscriptionFail,
} from "../slices/userSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch(loginSuccess(data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};
export const register = (formdata) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        "Content-type": "multipart/form-data",
      },

      withCredentials: true,
    });
    dispatch(registerSuccess(data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    dispatch(loadUserSuccess(data.user));
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch(logoutSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};
export const buySubscription = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });
    dispatch(buySubscriptionSuccess(data.subscriptionId));
    localStorage.setItem("user", JSON.stringify(data.subscriptionId));
  } catch (error) {
    dispatch(buySubscriptionFail(error.response.data.message));
  }
};

export const cancelSubscription = () => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });
    dispatch(cancelSubscriptionSuccess(data.message));
    localStorage.setItem("user", JSON.stringify(data.message));
  } catch (error) {
    dispatch(cancelSubscriptionFail(error.response.data.message));
  }
};
