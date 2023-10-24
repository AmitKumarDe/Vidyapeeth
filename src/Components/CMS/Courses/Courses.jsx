import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  allBlog,
  blogSearch,
} from "../../../redux/slices/blogSlices/blogSlice";
import { getCategories } from "../../../redux/slices/course/courseSlice";
import { Pagination, Skeleton, Stack } from "@mui/material";

const Courses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allBlog());
    dispatch(getCategories());
  }, [dispatch]);

  const { blogs, searchResults } = useSelector((state) => state.blog);
  const isLoading = useSelector((state) => state.blog.status === "loading");

  const { allCategories } = useSelector((state) => state.courses);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  

  // Pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  

  const handleSearch = () => {
    setCurrentPage(1);
    dispatch(blogSearch(searchTerm));
  };

  const paginate = (event, page) => {
    setCurrentPage(page);
  };

  const filteredBlogs = searchResults.length > 0 ? searchResults : blogs;
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  return (
    <div>
      {/* Header Start */}
      <div
        className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom"
        style={{ marginBottom: 90 }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-1">Courses</h1>
          <div className="d-inline-flex text-white mb-5">
            <p className="m-0 text-uppercase">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <i className="fa fa-angle-double-right pt-1 px-3" />
            <p className="m-0 text-uppercase">Courses</p>
          </div>
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: 600 }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {selectedCategory ? selectedCategory : "Courses"}
                </button>
                <div className="dropdown-menu">
                  {allCategories.map((data, index) => (
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setSelectedCategory(data._id)}
                      key={index}
                    >
                      {data.category}
                    </a>
                  ))}
                </div>
              </div>
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px 25px" }}
                placeholder="Keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary px-4 px-lg-5"
                  onClick={() => handleSearch(searchTerm)}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Courses Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Our Courses
                </h6>
                <h1 className="display-4">
                  Checkout New Releases Of Our Courses
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div className="col-lg-4 col-md-6 pb-4" key={index}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="60%" />
                </div>
              ))
            ) : searchTerm &&
              searchResults.length === 0 &&
              currentBlogs.length === 0 ? (
              <div className="col-12">
                <p>No search results found.</p>
              </div>
            ) : (
              (searchTerm ? searchResults : currentBlogs).map((blog, index) => (
                <div className="col-lg-4 col-md-6 pb-4" key={index}>
                  <Link
                    className="courses-list-item position-relative d-block overflow-hidden mb-2"
                    to={`/blogDetails/${blog._id}`}
                  >
                    <img
                      className="img-fluid"
                      src={`https://restapinodejs.onrender.com/api/blog/image/${blog._id}`}
                      alt={blog.title}
                    />
                    <div className="courses-text">
                      <h4 className="text-center text-white px-3">
                        {blog.title}
                      </h4>
                      <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                          <span className="text-white">
                            <i className="fa fa-user mr-2" />
                            Admin
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
                </div>
              ))
            )}
          </div>

          <div
            className="col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Stack spacing={2} justifyContent="center">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={paginate}
                shape="rounded"
                size="large"
              />
            </Stack>
          </div>
        </div>
      </div>
      {/* Courses End */}
    </div>
  );
};

export default Courses;
