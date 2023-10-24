import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const fullURL = `${location.pathname}`;
  // console.log(fullURL, "fullURL");
  const userEmail = localStorage.getItem("email");
  const userMobile = localStorage.getItem("mobile");

  const isLoginOrRegister = fullURL === "/login" || fullURL === "/register";
  return (
    <>
      {!isLoginOrRegister && (
        <>
          {/* Footer Start */}
          <div
            className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
            style={{ marginTop: 90 }}
          >
            <div className="container mt-5 pt-5">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <Link to="index.html" className="navbar-brand">
                    <h1 className="mt-n2 text-uppercase text-white">
                      <i className="fa fa-book-reader mr-3" />
                      VIDYAPEETH
                    </h1>
                  </Link>
                  <p className="m-0">
                    Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea
                    lorem at et diam est, tempor rebum ipsum sit ea tempor stet
                    et consetetur dolores. Justo stet diam ipsum lorem vero
                    clita diam
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h3 className="text-white mb-4">Newsletter</h3>
                  <div className="w-100">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-light"
                        style={{ padding: 30 }}
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary px-4">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-5">
                  <h3 className="text-white mb-4">Get In Touch</h3>
                  <p>
                    <i className="fa fa-map-marker-alt mr-2" />
                    Asansol,West Bengal
                  </p>
                  <p>
                    <i className="fa fa-phone-alt mr-2" />
                    {userMobile ? <>{userMobile}</> : <>+91-9876543210</>}
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-2" />
                    {userEmail ? <>{userEmail}</> : <>info@example.com</>}
                  </p>
                  <div className="d-flex justify-content-start mt-4">
                    <Link className="text-white mr-4" to="#">
                      <i className="fab fa-2x fa-twitter" />
                    </Link>
                    <Link className="text-white mr-4" to="#">
                      <i className="fab fa-2x fa-facebook-f" />
                    </Link>
                    <Link className="text-white mr-4" to="#">
                      <i className="fab fa-2x fa-linkedin-in" />
                    </Link>
                    <Link className="text-white" to="#">
                      <i className="fab fa-2x fa-instagram" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <h3 className="text-white mb-4">Our Courses</h3>
                  <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Web Design
                    </Link>
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Apps Design
                    </Link>
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Marketing
                    </Link>
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Research
                    </Link>
                    <Link className="text-white-50" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      SEO
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <h3 className="text-white mb-4">Quick Links</h3>
                  <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Privacy Policy
                    </Link>
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Terms &amp; Condition
                    </Link>
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Regular FAQs
                    </Link>
                    <Link className="text-white-50 mb-2" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Help &amp; Support
                    </Link>
                    <Link className="text-white-50" to="#">
                      <i className="fa fa-angle-right mr-2" />
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid bg-dark text-white-50 border-top py-4"
            style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                  <p className="m-0">
                    Copyright ©{" "}
                    <Link className="text-white" to="#">
                      VIDYAPEETH
                    </Link>
                    . All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End */}
        </>
      )}
    </>
  );
};
export default Footer;
