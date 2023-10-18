import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/authSlice";
import blogSlice from "../slices/blogSlices/blogSlice";
import courseSlice from "../slices/course/courseSlice";
import postSlice from "../slices/post/postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    blog: blogSlice,
    courses: courseSlice,
    posts: postSlice,
  },
});
export default store;
