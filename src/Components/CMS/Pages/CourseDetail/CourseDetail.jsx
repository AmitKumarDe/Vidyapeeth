import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PageHeader from "../../PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  getBlogDetail,
  getComments,
} from "../../../../redux/slices/blogSlices/blogSlice";
import { getCategories } from "../../../../redux/slices/course/courseSlice";
import { getRecentPosts } from "../../../../redux/slices/post/postSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { courses, courses1, courses2, courses3 } from "../../../../assets/images";

const CourseDetail = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  console.log(courseId);

  const schema = z.object({
    name: z.string().min(2, "Full name is required"),

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
    comment: z.string().min(2, "Comment  is required"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const postData = {
      id: courseId,
      name: data.name,
      email: data.email,
      comment: data.comment,
    };
    dispatch(createComment(postData)).then(() => {
      dispatch(getComments(courseId));
    });
    reset();
  };

  const pageTitle = "Course Detail";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Course Detail", url: "/detail" },
  ];

  useEffect(() => {
    dispatch(getBlogDetail(courseId));
    dispatch(getCategories());
    dispatch(getRecentPosts());
    dispatch(getComments(courseId));
  }, [dispatch, courseId]);
  const { blogDetails, allComments } = useSelector((state) => state.blog);
  const { allCategories } = useSelector((state) => state.courses);
  const { recentPosts } = useSelector((state) => state.posts);

  return (
    <>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      {/* Detail Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-5">
                <div className="section-title position-relative mb-5">
                  <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                    Course Detail
                  </h6>
                  <h1 className="display-4">{blogDetails.title}</h1>
                </div>
                <img
                  className="img-fluid rounded w-100 mb-4"
                  src={`https://restapinodejs.onrender.com/api/blog/image/${courseId}`}
                  alt="Image"
                />

                <div
                  dangerouslySetInnerHTML={{
                    __html: blogDetails?.postText,
                  }}
                />
              </div>

              <div
                className="bg-white"
                style={{ padding: 30, marginBottom: 30 }}
              >
                <h4
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  {allComments.length} Comments
                </h4>
                {allComments.map((comment) => (
                  <div className="media mb-4" key={comment._id}>
                    <img
                      src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                      alt="user"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        <Link to="">{comment.name}</Link>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>{comment.comment}</p>
                      <button className="btn btn-sm btn-outline-primary">
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form Start */}
              <div className="bg-white mb-3" style={{ padding: 30 }}>
                <h4
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Leave a comment
                </h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      {...register("name")}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="name@example.com"
                      {...register("email")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      defaultValue={""}
                      {...register("comment")}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <input
                      type="submit"
                      defaultValue="Leave a comment"
                      className="btn btn-primary font-weight-semi-bold py-2 px-3"
                    />
                  </div>
                </form>
              </div>
              {/* Comment Form End */}
              <h2 className="mb-3">Related Courses</h2>
              <OwlCarousel
                className="owl-carousel owl-theme related-carousel position-relative"
                style={{ padding: "0 30px" }}
                loop
                margin={10}
                items={2}
                nav
              >
                <Link
                  className="courses-list-item position-relative d-block overflow-hidden mb-2 item"
                  to="/detail"
                >
                  <img
                    className="img-fluid"
                    src={courses1}
                    alt=""
                  />
                  <div className="courses-text">
                    <h4 className="text-center text-white px-3">
                      Web design &amp; development courses for beginners
                    </h4>
                    <div className="border-top w-100 mt-3">
                      <div className="d-flex justify-content-between p-4">
                        <span className="text-white">
                          <i className="fa fa-user mr-2" />
                          Jhon Doe
                        </span>
                        <span className="text-white">
                          <i className="fa fa-star mr-2" />
                          4.5
                          <small>(250)</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="courses-list-item position-relative d-block overflow-hidden mb-2 item"
                  to="/detail"
                >
                  <img
                    className="img-fluid"
                    src={courses2}
                    alt=""
                  />
                  <div className="courses-text">
                    <h4 className="text-center text-white px-3">
                      Web design &amp; development courses for beginners
                    </h4>
                    <div className="border-top w-100 mt-3">
                      <div className="d-flex justify-content-between p-4">
                        <span className="text-white">
                          <i className="fa fa-user mr-2" />
                          Jhon Doe
                        </span>
                        <span className="text-white">
                          <i className="fa fa-star mr-2" />
                          4.5
                          <small>(250)</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="courses-list-item position-relative d-block overflow-hidden mb-2 item"
                  to="/detail"
                >
                  <img
                    className="img-fluid"
                    src={courses3}
                    alt=""
                  />
                  <div className="courses-text">
                    <h4 className="text-center text-white px-3">
                      Web design &amp; development courses for beginners
                    </h4>
                    <div className="border-top w-100 mt-3">
                      <div className="d-flex justify-content-between p-4">
                        <span className="text-white">
                          <i className="fa fa-user mr-2" />
                          Jhon Doe
                        </span>
                        <span className="text-white">
                          <i className="fa fa-star mr-2" />
                          4.5
                          <small>(250)</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </OwlCarousel>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="bg-primary mb-5 py-3">
                <h3 className="text-white py-3 px-4 m-0">Course Features</h3>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Instructor</h6>
                  <h6 className="text-white my-3">John Doe</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Rating</h6>
                  <h6 className="text-white my-3">
                    4.5 <small>(250)</small>
                  </h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Lectures</h6>
                  <h6 className="text-white my-3">15</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Duration</h6>
                  <h6 className="text-white my-3">10.00 Hrs</h6>
                </div>
                <div className="d-flex justify-content-between border-bottom px-4">
                  <h6 className="text-white my-3">Skill level</h6>
                  <h6 className="text-white my-3">All Level</h6>
                </div>
                <div className="d-flex justify-content-between px-4">
                  <h6 className="text-white my-3">Language</h6>
                  <h6 className="text-white my-3">English</h6>
                </div>
                <h5 className="text-white py-3 px-4 m-0">Course Price: $199</h5>
                <div className="py-3 px-4">
                  <Link className="btn btn-block btn-secondary py-3 px-5" to="">
                    Enroll Now
                  </Link>
                </div>
              </div>
              <div className="mb-5">
                <h2 className="mb-3">Categories</h2>
                <ul className="list-group list-group-flush">
                  {allCategories.map((data, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center px-0"
                      key={index}
                    >
                      <Link to="" className="text-decoration-none h6 m-0">
                        {data.category}
                      </Link>
                      <span className="badge badge-primary badge-pill">
                        150
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <h2 className="mb-4">Recent Courses</h2>
                {recentPosts.map((post, index) => (
                  <Link
                    className="d-flex align-items-center text-decoration-none mb-4"
                    to=""
                    key={index}
                  >
                    <img
                      className="img-fluid rounded"
                      src={courses}
                      alt=""
                    />
                    <div className="pl-3">
                      <h6>{post.title}</h6>
                      <div className="d-flex">
                        <small className="text-body mr-3">
                          <i className="fa fa-user text-primary mr-2" />
                          Admin
                        </small>
                        <small className="text-body">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 (250)
                        </small>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Detail End */}
    </>
  );
};
export default CourseDetail;
