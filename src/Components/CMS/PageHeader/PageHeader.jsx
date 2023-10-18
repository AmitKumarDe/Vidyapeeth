import PropTypes from "prop-types"; // Import PropTypes
import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ pageTitle, breadcrumbLinks }) => {
  return (
    <div
      className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom"
      style={{ marginBottom: "90px" }}
    >
      <div className="container text-center py-5">
        <h1 className="text-white display-1">{pageTitle}</h1>
        <div className="d-inline-flex text-white mb-5">
          {breadcrumbLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              <p className="m-0 text-uppercase">
                <Link className="text-white" href={link.url}>
                  {link.label}
                </Link>
              </p>
              {index < breadcrumbLinks.length - 1 && (
                <i className="fa fa-angle-double-right pt-1 px-3"></i>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add prop type validation
PageHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  breadcrumbLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageHeader;
