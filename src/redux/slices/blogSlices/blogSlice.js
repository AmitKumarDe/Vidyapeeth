import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/Helper";
import { toast } from "react-toastify";

export const allBlog = createAsyncThunk("/allBlog", async () => {
  const res = await axiosInstance.get(`/allBlog`);
  const resData = res?.data;
  return resData;
});

export const getBanners = createAsyncThunk("/banner", async () => {
  const res = await axiosInstance.get(`/banner`);
  console.log(`banner`, res.data.bannerdata);
  return res.data.bannerdata;
});

export const blogSearch = createAsyncThunk("/search", async (searchData) => {
  const res = await axiosInstance.get(`/search/${searchData}`);
  const resData = res?.data;
  return resData;
});

export const getBlogDetail = createAsyncThunk(
  "/blogDetails/:id",
  async (_id) => {
    const response = await axiosInstance.get(`/blogDetails/${_id}`, _id);
    return response?.data.data;
  }
);

export const getComments = createAsyncThunk("/comment/:id", async (_id) => {
  const res = await axiosInstance.get(`/comment/${_id}`, _id);
  return res.data.post.comment.comments;
});

export const createComment = createAsyncThunk(
  "/blog/:id/comment/create",
  async ({ postData }) => {
    const res = await axiosInstance.post(
      `/blog/${postData.id}/comment/create`,
      postData
    );
    return res;
  }
);

const initialState = {
  status: "",
  error: null,
  token: null,
  redirect: null,
  blogs: [],
  blogDetails: [],
  allComments: [],
  createComment: [],
  searchResults: [],
  allBanners: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //* Blogs
      .addCase(allBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(allBlog.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.blogs = payload.data;
        console.log(payload);
      })
      .addCase(allBlog.rejected, (state, { payload }) => {
        state.status = "failed";
        console.log(payload?.message);
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //* Banners

      .addCase(getBanners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBanners.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.allBanners = payload;
        console.log(payload);
      })
      .addCase(getBanners.rejected, (state, { payload }) => {
        state.status = "failed";
        console.log(payload?.message);
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //search
      .addCase(blogSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(blogSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(blogSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //* BlogDetail
      .addCase(getBlogDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBlogDetail.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.blogDetails = payload;
        toast.success(payload?.message);
      })
      .addCase(getBlogDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.payload.message);
      })

      //* comments
      .addCase(getComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        // console.log(payload);
        state.allComments = payload;
        console.log(payload);
      })
      .addCase(getComments.rejected, (state, { payload }) => {
        state.status = "failed";

        state.error = payload?.message;
        toast.error(payload?.message);
      })
      //* create comments
      .addCase(createComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createComment.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.createComment = payload;
        console.log(payload);
      })
      .addCase(createComment.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      });
  },
});

export default blogSlice.reducer;
