import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PageHeader from "../../PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTestimonials } from "../../../../redux/slices/course/courseSlice";

const Testimonial = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTestimonials());
  }, [dispatch]);

  const pageTitle = "Testimonial";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Testimonial", url: "/testimonial" },
  ];

  const { testimonials } = useSelector((state) => state.courses);
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />{" "}
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
                className="owl-carousel owl-theme testimonial-carousel "
                margin={10}
                items={1}
                nav
                loop={true}
                autoplay={true}
                autoplayTimeout={2000}
                dots={false}
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
    </div>
  );
};
export default Testimonial;
