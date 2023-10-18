import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PageHeader from "../../PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTeam } from "../../../../redux/slices/course/courseSlice";

const Team = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeam());
  }, [dispatch]);
  const pageTitle = "Team";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Team", url: "/team" },
  ];

  const { teamMembers } = useSelector((state) => state.courses);
  return (
    <>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
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
            className="owl-carousel owl-theme team-carousel position-relative"
            style={{ padding: "0 30px" }}
            margin={30}
            loop={true}
            autoplay={true}
            autoplayTimeout={2000}
            dots={false}
          >
            {teamMembers.map((team, index) => (
              <div className="team-item item" key={index}>
                {" "}
                <img
                  className="img-fluid w-100"
                  src={`https://restapinodejs.onrender.com/api/team/photo/${team._id}`}
                  alt=""
                />
                <div className="bg-light text-center p-4">
                  <h5 className="mb-3">{team.name}</h5>
                  <p className="mb-2">{team.possession}</p>
                  <div className="d-flex justify-content-center">
                    <Link className="mx-1 p-1" href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link className="mx-1 p-1" href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="mx-1 p-1" href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link className="mx-1 p-1" href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link className="mx-1 p-1" href="#">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};
export default Team;
