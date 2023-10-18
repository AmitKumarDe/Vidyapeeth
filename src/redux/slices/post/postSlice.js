import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/Helper";
import { toast } from "react-toastify";

export const getRecentPosts = createAsyncThunk("/letest-post", async () => {
  const res = await axiosInstance.get(`/letest-post`);
  const resData = res?.data;
  return resData;
});

export const getServices = createAsyncThunk("/service", async () => {
  const res = await axiosInstance.get(`/service`);
  const resData = res?.data;
  return resData;
});

export const contactUs = createAsyncThunk(
  "/contact/create",
  async (postData) => {
    const res = await axiosInstance.post(`/contact/create`, postData);
    const resData = res?.data;
    return resData;
  }
);

const initialState = {
  status: "",
  recentPosts: [],
  services: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //* courses
      .addCase(getRecentPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecentPosts.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.recentPosts = payload.data;
      })
      .addCase(getRecentPosts.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //* Services
      .addCase(getServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getServices.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.services = payload.data;
        console.log(payload);
        toast.success("Services fetched successfully");
      })
      .addCase(getServices.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      })
      //* ContactUs
      .addCase(contactUs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(contactUs.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        // state.services = payload.data;
        console.log(payload);
      })
      .addCase(contactUs.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      });
  },
});

export default postSlice.reducer;
