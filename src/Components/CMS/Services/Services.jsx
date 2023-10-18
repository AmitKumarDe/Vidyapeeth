import { useDispatch, useSelector } from "react-redux";
import "./Services.css";
import { useEffect } from "react";
import { getServices } from "../../../redux/slices/post/postSlice";
import PageHeader from "../PageHeader/PageHeader";

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const pageTitle = "Services";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
  ];

  const { services } = useSelector((state) => state.posts);
  return (
    <>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>What I Do</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* feaure box */}
            {services.map((service, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-desktop" />
                  </div>
                  <div className="feature-content">
                    <h5>{service.name}</h5>
                    <p>{service.details}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* / */}
            {/* feaure box */}
            {/* <div className="col-sm-6 col-lg-4">
            <div className="feature-box-1">
              <div className="icon">
                <i className="fa fa-user" />
              </div>
              <div className="feature-content">
                <h5>Different Layout</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div> */}
            {/* / */}
            {/* feaure box */}
            {/* <div className="col-sm-6 col-lg-4">
            <div className="feature-box-1">
              <div className="icon">
                <i className="fa fa-comment" />
              </div>
              <div className="feature-content">
                <h5>Make it Simple</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div> */}
            {/* / */}
            {/* feaure box */}
            {/* <div className="col-sm-6 col-lg-4">
            <div className="feature-box-1">
              <div className="icon">
                <i className="fa fa-image" />
              </div>
              <div className="feature-content">
                <h5>Responsiveness</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div> */}
            {/* / */}
            {/* feaure box */}
            {/* <div className="col-sm-6 col-lg-4">
            <div className="feature-box-1">
              <div className="icon">
                <i className="fa fa-th" />
              </div>
              <div className="feature-content">
                <h5>Testing for Perfection</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div> */}
            {/* / */}
            {/* feaure box */}
            {/* <div className="col-sm-6 col-lg-4">
            <div className="feature-box-1">
              <div className="icon">
                <i className="fa fa-cog" />
              </div>
              <div className="feature-content">
                <h5>Advanced Options</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div> */}
            {/* / */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
