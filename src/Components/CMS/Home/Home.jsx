import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  allBlog,
  getBanners,
} from "../../../redux/slices/blogSlices/blogSlice";
import {
  getCategories,
  getCourses,
  getTeam,
  getTestimonials,
} from "../../../redux/slices/course/courseSlice";
import CountUp from "react-countup";
import { about, feature } from "../../../assets/images";

const Home = () => {
  const dispatch = useDispatch();
  const { allBanners } = useSelector((state) => state.blog);
  const { courses, teamMembers, testimonials } = useSelector(
    (state) => state.courses
  );
  useEffect(() => {
    dispatch(allBlog());
    dispatch(getTeam());
    dispatch(getTestimonials());
    dispatch(getCategories());
    dispatch(getCourses());
    dispatch(getBanners());
  }, [dispatch]);

  // console.log(allBanners);

  // console.log(testimonials);

  const options = {
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
  };
  return (
    <>
      {/* Header Start */}
      <div
        className=" jumbotron-fluid position-relative overlay-bottom"
        style={{ marginBottom: "90px" }}
      >
        <div className="container-fluid p-0">
          <OwlCarousel
            className="owl-carousel owl-theme carousel slide"
            margin={10}
            items={1}
            loop={true}
            autoplay={true}
            autoplayTimeout={4000}
            dots={false}
          
            data-bs-ride="carousel"
          >
            {allBanners.map((banner, index) => (
              <div className="carousel-inner item" key={index}>
                <div className="carousel-item active">
                  <img
                    style={{ height: "100vh", width: "100vw" }}
                    src={`https://restapinodejs.onrender.com/api/banner/photo/${banner._id}`}
                    alt={banner.title}
                  />
                </div>
              </div>
            ))}
          </OwlCarousel>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target=".owl-carousel"
            data-bs-slide="prev"
          >
            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
              <span className="carousel-control-prev-icon mb-n2" />
            </div>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target=".owl-carousel"
            data-bs-slide="next"
          >
            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
              <span className="carousel-control-next-icon mb-n2" />
            </div>
          </button> */}
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={about}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  About Us
                </h6>
                <h1 className="display-4">
                  First Choice For Online Education Anywhere
                </h1>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
              <div className="row pt-3 mx-0">
                <div className="col-3 px-0">
                  <div className="bg-success text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={123} duration={3} />
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Available<span className="d-block">Subjects</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-primary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={1234} duration={3} />
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Online<span className="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-secondary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={123} duration={3} />
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Skilled<span className="d-block">Instructors</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-warning text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={1234} duration={3} />
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Happy<span className="d-block">Students</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Feature Start */}
      <div className="container-fluid bg-image" style={{ margin: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 my-5 pt-5 pb-lg-5">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Why Choose Us?
                </h6>
                <h1 className="display-4">
                  Why You Should Start Learning with Us?
                </h1>
              </div>
              <p className="mb-4 pb-2">
                Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
                ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
                sadipscing et erat eirmod diam kasd labore clita est. Diam
                sanctus gubergren sit rebum clita amet.
              </p>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-primary mr-4">
                  <i className="fa fa-2x fa-graduation-cap text-white" />
                </div>
                <div className="mt-n1">
                  <h4>Skilled Instructors</h4>
                  <p>
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-secondary mr-4">
                  <i className="fa fa-2x fa-certificate text-white" />
                </div>
                <div className="mt-n1">
                  <h4>International Certificate</h4>
                  <p>
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="btn-icon bg-warning mr-4">
                  <i className="fa fa-2x fa-book-reader text-white" />
                </div>
                <div className="mt-n1">
                  <h4>Online Classes</h4>
                  <p className="m-0">
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={feature}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Start */}
      {/* Courses Start */}
      <div className="container-fluid px-0 py-5">
        <div className="row mx-0 justify-content-center pt-5">
          <div className="col-lg-6">
            <div className="section-title text-center position-relative mb-4">
              <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                Our Courses
              </h6>
              <h1 className="display-4">
                Checkout New Releases Of Our Courses
              </h1>
            </div>
          </div>
        </div>
        <OwlCarousel
          className="owl-theme courses-carousel carousel slide"
          {...options}
        >
          {courses.map((course, index) => (
            <div
              className="courses-item position-relative item"
              key={index}
              style={{ height: "60vh" }}
            >
              <img
                className="img-fluid"
                src={`https://restapinodejs.onrender.com/api/course/photo/${course._id}`}
                alt={course.name}
              />

              <div className="courses-text">
                <h4 className="text-center text-white px-3">{course.name}</h4>
                <strong className="text-center text-white px-3">
                  Requirements:
                </strong>{" "}
                <p className="text-center text-white px-3">
                  {course.requirement}
                </p>
                <div className="border-top w-100 mt-3">
                  <div className="d-flex justify-content-between p-3">
                    <span className="text-white">
                      <strong>Duration:</strong>{" "}
                      <small>{course.duration}</small>
                    </span>
                    <span className="text-white">
                      <strong>Fees:</strong> <small>{course.fees}</small>
                    </span>
                  </div>
                </div>
                <div className="w-100 bg-white text-center p-4">
                  <Link
                    className="btn btn-primary"
                    to={`/course/apply/${course._id}`}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        <div className="row justify-content-center bg-image mx-0 mb-5">
          <div className="col-lg-6 py-5">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4">30% Off For New Students</h1>
              <form>
                <div className="form-row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ padding: "30px 20px" }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ padding: "30px 20px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <select
                        name="course"
                        className="custom-select bg-light border-0 px-3"
                        style={{ height: 60 }}
                      >
                        <option value="">Select A Course</option>
                        <option value="1">Course 1</option>
                        <option value="2">Course 2</option>
                        <option value="3">Course 3</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      style={{ height: 60 }}
                    >
                      Sign Up Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Courses End */}
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="section-title text-center position-relative mb-5">
            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
              Instructors
            </h6>
            <h1 className="display-4">Meet Our Instructors</h1>
          </div>
          <OwlCarousel
            className="owl-theme team-carousel position-relative carousel slide"
            style={{ padding: "0 30px" }}
            margin={20}
            autoplay={true}
            autoplayTimeout={3000}
            dots={false}
            loop={true}
            // navClass={["owl-nav", "owl-prev"]}
          >
            {teamMembers.map((team, index) => (
              <div className="team-item item" key={index}>
                {" "}
                <img
                  className="img-fluid "
                  src={`https://restapinodejs.onrender.com/api/team/photo/${team._id}`}
                  alt=""
                  style={{ width: "100%", height: "45vh" }}
                />
                <div className="bg-light text-center p-4">
                  <h5 className="mb-3">{team.name}</h5>
                  <p className="mb-2">{team.possession}</p>
                  <div className="d-flex justify-content-center">
                    <a className="mx-1 p-1" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="mx-1 p-1" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="mx-1 p-1" href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="mx-1 p-1" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a className="mx-1 p-1" href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div
        className="container-fluid bg-image py-5"
        style={{ margin: "90px 0" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Testimonial
                </h6>
                <h1 className="display-4">What Say Our Students</h1>
              </div>
              <p className="m-0">
                Dolor est dolores et nonumy sit labore dolores est sed rebum
                amet, justo duo ipsum sanctus dolore magna rebum sit et. Diam
                lorem ea sea at. Nonumy et at at sed justo est nonumy tempor.
                Vero sea ea eirmod, elitr ea amet diam ipsum at amet. Erat sed
                stet eos ipsum diam
              </p>
            </div>
            <div className="col-lg-7">
              <OwlCarousel
                className="owl-carousel owl-theme testimonial-carousel carousel slide"
                loop={true}
                margin={10}
                items={1}
                nav
                dots={false}
                autoplay={true}
                autoplayTimeout={3000}
              >
                {testimonials.map((testimonials, index) => (
                  <div className="bg-white p-5 item" key={index}>
                    <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                    <p>{testimonials.talk}</p>
                    <div className="d-flex flex-shrink-0 align-items-center mt-4">
                      <img
                        className="img-fluid mr-4"
                        src={`https://restapinodejs.onrender.com/api/testimonials/photo/${testimonials._id}`}
                        alt=""
                        style={{ width: "15%", height: "100%" }}
                      />
                      <div>
                        <h5>{testimonials.name}</h5>
                        <span>{testimonials.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div
                className="bg-light d-flex flex-column justify-content-center px-5"
                style={{ height: 450 }}
              >
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-primary mr-4">
                    <i className="fa fa-2x fa-map-marker-alt text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Our Location</h4>
                    <p className="m-0">123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-secondary mr-4">
                    <i className="fa fa-2x fa-phone-alt text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Call Us</h4>
                    <p className="m-0">+012 345 6789</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-icon bg-warning mr-4">
                    <i className="fa fa-2x fa-envelope text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Email Us</h4>
                    <p className="m-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Need Help?
                </h6>
                <h1 className="display-4">Send Us A Message</h1>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      rows={5}
                      placeholder="Message"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};
export default Home;
