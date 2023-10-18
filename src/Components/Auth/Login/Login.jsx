import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  login,
  newRegister,
  reset_redirectToUpdate,
} from "../../../redux/slices/auth/authSlice";
import { FidgetSpinner } from "react-loader-spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirect, status } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .refine(
        (value) =>
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
        {
          message: "Invalid email format",
        }
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .refine(
        (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value),
        {
          message: `It must contain at least one lowercase letter
          It must contain at least one uppercase letter.
          It must contain at least one digit.
          It must have a minimum length of 8 characters.`,
        }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    const RedirectUser = () => {
      let token = localStorage.getItem("token");
      let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

      if (token !== null && token !== undefined && token !== "") {
        isInLoginPage && navigate("/");
      }
    };

    RedirectUser();
  }, [redirect, navigate]);

  useEffect(() => {
    dispatch(reset_redirectToUpdate(null));
  }, [dispatch]);

  const newRegistration = () => {
    dispatch(newRegister());
    navigate("/login");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (data) => {
    dispatch(login(data));
  };

  return (
    <main id="main">
      <section className="mt-5">
        <div className="container py-4 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 style={{ color: "#2878EB" }}>Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="floatingInput">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="floatingInput"
                    placeholder="name@example.com"
                    className="form-control form-control-lg"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="floatingPassword">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      id="floatingPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="form-control form-control-lg"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="btn  no-hover-effect"
                      onClick={toggleShowPassword}
                      style={{ border: "1px solid #ced4da" }}
                    >
                      <i
                        className={
                          showPassword
                            ? "bi bi-eye-fill"
                            : "bi bi-eye-slash-fill"
                        }
                      ></i>
                    </button>
                  </div>
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {status === "loading" ? (
                  <>
                    <button
                      type="submit"
                      disabled
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                      className="btn btn-success btn-lg btn-block"
                    >
                      <FidgetSpinner
                        visible={true}
                        height="32"
                        width="100"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                        backgroundColor="#F4442E"
                      />
                    </button>
                    <div className="divider d-flex align-items-center my-3">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        DONT HAVE AN ACCOUNT?{" "}
                        <Link to="/register" onClick={newRegistration}>
                          <b>REGISTER HERE</b>
                        </Link>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="btn btn-success btn-lg btn-block"
                      style={{ backgroundColor: "#2878EB" }}
                    >
                      Login
                    </button>
                    <div className="divider d-flex align-items-center my-3">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        DONT HAVE AN ACCOUNT?
                        <Link to="/register" onClick={newRegistration}>
                          <b>REGISTER HERE</b>
                        </Link>
                      </p>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
