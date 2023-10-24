import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const fullURL = `${location.pathname}`;
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");
  const userMobile = localStorage.getItem("mobile");

  const isLoginOrRegister = fullURL === "/login" || fullURL === "/register";

  return (
    <>
      {!isLoginOrRegister && (
        <div>
          {/* Topbar Start */}
          <div className="container-fluid bg-dark">
            <div className="row py-2 px-lg-5">
              <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center text-white">
                  <small>
                    <i className="fa fa-phone-alt mr-2"></i>
                    {userMobile}
                  </small>
                  <small className="px-3">|</small>
                  <small>
                    <i className="fa fa-envelope mr-2"></i>{" "}
                    {userEmail ? <>{userEmail}</> : <>info@example.com</>}
                  </small>
                </div>
              </div>
              <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                  <NavLink className="text-white px-2" to="">
                    <i className="fab fa-facebook-f"></i>
                  </NavLink>
                  <NavLink className="text-white px-2" to="">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                  <NavLink className="text-white px-2" to="">
                    <i className="fab fa-linkedin-in"></i>
                  </NavLink>
                  <NavLink className="text-white px-2" to="">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                  <NavLink className="text-white pl-2" to="">
                    <i className="fab fa-youtube"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}

          {/* Navbar Start */}
          <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
              <NavLink to="/" className="navbar-brand ml-lg-3">
                <h1 className="m-0 text-uppercase text-primary">
                  <i className="fa fa-book-reader mr-3"></i>Vidyapeeth
                </h1>
              </NavLink>
              <button
                type="button"
                className="navbar-toggler "
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between px-lg-3"
                id="navbarCollapse"
              >
                <div className="navbar-nav mx-auto py-0">
                  <NavLink to="/" className="nav-item nav-link ">
                    Home
                  </NavLink>
                  <NavLink to="/about" className="nav-item nav-link">
                    About
                  </NavLink>
                  <NavLink to="/services" className="nav-item nav-link">
                    Services
                  </NavLink>
                  <NavLink to="/course" className="nav-item nav-link">
                    Courses
                  </NavLink>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </NavLink>
                    <div className="dropdown-menu m-0">
                      <NavLink to="/feature" className="dropdown-item">
                        Our Features
                      </NavLink>
                      <NavLink to="/team" className="dropdown-item">
                        Instructors
                      </NavLink>
                      <NavLink to="/testimonial" className="dropdown-item">
                        Testimonial
                      </NavLink>
                    </div>
                  </div>
                  <NavLink to="/contact" className="nav-item nav-link">
                    Contact
                  </NavLink>
                  <>
                    {token ? (
                      <NavLink
                        to=""
                        className="nav-item nav-link"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </NavLink>
                    ) : null}
                  </>
                </div>
                <NavLink
                  to="/login"
                  className="btn btn-primary py-2 px-4 d-none d-lg-block"
                >
                  Join Us
                </NavLink>
              </div>
            </nav>
          </div>
          {/* Navbar End */}
        </div>
      )}
    </>
  );
}

export default Header;
