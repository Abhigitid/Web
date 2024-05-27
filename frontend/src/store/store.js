import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import { profileSlice } from "../slices/userSlice";
import { courseSlice } from "../slices/courseSlice";
import { subscriptionSlice } from "../slices/userSlice";
import { adminSlice } from "../slices/adminSlice";
import { otherSlice } from "../slices/otherSlice";

// const userInfoFromStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// const initialState = {
//   user: { user: userInfoFromStorage },
// };
const store = configureStore({
  reducer: {
    user: userSlice,
    profile: profileSlice.reducer,
    subscription: subscriptionSlice.reducer,
    course: courseSlice.reducer,
    admin: adminSlice.reducer,
    other: otherSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
  // preloadedState: initialState,
});

export default store;
export const server = "https://web-dev-okeg.onrender.com/api/v1";
