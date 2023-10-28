import "./ApplyCourse.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { applyCourse } from "../../../redux/slices/course/courseSlice";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

// import { applyCourse } from "../Redux/courseSlice";
const ApplyCourse = () => {
  //   const { loading } = useSelector((state) => state.courses);
  //   console.log(loading);
  const { courseId } = useParams();

  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const applyCourseSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).max(20),
    address: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    qualification: z.string().min(2).max(50),
    experiance: z.string().min(2).max(10),
    programing_knowledge: z.string().min(2).max(10),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(applyCourseSchema) });

  const onSubmit = (data) => {
    const postData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      qualification: data.qualification,
      experiance: data.experiance,
      programing_knowledge: data.programing_knowledge,
    };
    dispatch(applyCourse({ postData, courseId })).then((response) => {
      if (response.payload) {
        Swal.fire({
          title: "Success!",
          text: "Your course application has been submitted successfully.",
          icon: "success",
        });
      }
    });
    reset();
  };

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="section-title pr-5">
                <span className="pr-2">Register for course </span>
              </p>
              <h1 className="mb-4">Register A Course </h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <ul className="list-inline m-0">
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" />
                  Labore eos amet dolor amet diam
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" />
                  Etsea et sit dolor amet ipsum
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3" />
                  Diam dolor diam elitripsum vero.
                </li>
              </ul>
              <NavLink to="" className="btn btn-primary mt-4 py-2 px-4">
                Book Now
              </NavLink>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-secondary text-center p-2">
                  <h1 className="text-white m-0">Apply For Course</h1>
                </div>
                <div className="card-body rounded-bottom bg-light p-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-1">
                      <div className="col-sm-6">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Full Name
                          </label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter Your Full Name"
                            {...register("name")}
                          />
                          {errors.name && (
                            <span style={{ color: "red" }}>
                              {errors.name.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Mobile Number
                          </label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter Your Mobile Number"
                            minLength={10}
                            maxLength={10}
                            {...register("phone")}
                          />
                          {errors.phone && (
                            <span style={{ color: "red" }}>
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="name@example.com"
                            {...register("email")}
                          />
                          {errors.email && (
                            <span style={{ color: "red" }}>
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            City
                          </label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter Your City"
                            {...register("city")}
                          />
                          {errors.city && (
                            <span style={{ color: "red" }}>
                              {errors.city.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Address
                          </label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter Your Address"
                            {...register("address")}
                          />
                          {errors.address && (
                            <span style={{ color: "red" }}>
                              {errors.address.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Qualification
                          </label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter Your Qualification Details"
                            {...register("qualification")}
                          />
                          {errors.qualification && (
                            <span style={{ color: "red" }}>
                              {errors.qualification.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Programming Language
                          </label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter Your Programming Language"
                            {...register("programing_knowledge")}
                          />
                          {errors.programing_knowledge && (
                            <span style={{ color: "red" }}>
                              {errors.programing_knowledge.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Experience
                          </label>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Enter Your Experience"
                            {...register("experiance")}
                          />
                          {errors.experiance && (
                            <span style={{ color: "red" }}>
                              {errors.experiance.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        {/* {loading ? ( */}
                        {/* <button
                            className="btn btn-primary  w-100 py-3"
                            onClick={handleSubmit(submission)}
                            disabled
                            type="submit"
                            style={{ border: "1px solid white" }}
                          >
                            Loading...
                          </button>
                        ) : ( */}
                        <button
                          className="btn btn-primary  w-100 py-2"
                          type="submit"
                          style={{
                            border: "1px solid white",
                            fontSize: "25px",
                          }}
                        >
                          Submit
                        </button>
                        {/* )} */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCourse;
