import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/Helper";
import { toast } from "react-toastify";

export const login = createAsyncThunk("/login", async (formData) => {
  const res = await axiosInstance.post(`/login`, formData);
  const resData = res?.data;
  return resData;
});

export const signup = createAsyncThunk("/register", async (formData) => {
  const res = await axiosInstance.post(`/register`, formData);
  const resData = res?.data;
  return resData;
});

const initialState = {
  status: "",
  error: null,
  token: null,
  redirect: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset_redirectToUpdate: (state, { payload }) => {
      state.redirect = payload;
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      toast.success("Logout Successfully");
    },
    newRegister: () => {
      localStorage.removeItem("username");
    },
  },

  extraReducers: (builder) => {
    builder
      //* Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        if (payload.status === 200) {
          state.redirect = "/";
          localStorage.setItem("token", payload?.token);
          localStorage.setItem("email", payload?.user.email);
          localStorage.setItem("mobile", payload?.user.mobile);
          toast.success(payload?.message);
        } else if (payload.status === 201) {
          toast.error(payload?.message);
        }
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //* Signup

      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.status = true;
        if (payload.status === true) {
          state.redirect = "/login";
          localStorage.setItem("fullname", payload?.data.name);
          toast.success(payload?.message);
        } else if (payload.status === 201) {
          toast.error(payload?.message);
        }
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        toast.error(action.payload.message);
      });
  },
});

export const { reset_redirectToUpdate, logout, newRegister } =
  AuthSlice.actions;

export default AuthSlice.reducer;
