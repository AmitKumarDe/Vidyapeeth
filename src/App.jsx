import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "./Components/CMS/Home/Home";
import Header from "./Components/Shared/Header/Header";
import BackToTopButton from "./Components/Shared/BackToTop/BackToTopButton";
import About from "./Components/CMS/About/About";
import Courses from "./Components/CMS/Courses/Courses";
import CourseDetail from "./Components/CMS/Pages/CourseDetail/CourseDetail";
import OurFeatures from "./Components/CMS/Pages/Features/OurFeatures";
import Team from "./Components/CMS/Pages/Team/Team";
import Testimonial from "./Components/CMS/Pages/Testimonial/Testimonial";
import Contact from "./Components/CMS/Contact/Contact";
import Footer from "./Components/Shared/Footer/Footer";
import Register from "./Components/Auth/Register/Register";
import Login from "./Components/Auth/Login/Login";
import Services from "./Components/CMS/Services/Services";
import ApplyCourse from "./Components/CMS/Apply Course/ApplyCourse";
import NotFound from "./Components/CMS/NotFound/NotFound";
import { toast } from "react-toastify";

function App() {
  
  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    // useEffect(() => {
    //   localStorage.setItem("pathname", location?.pathname);
    // }, [location]);
    const location = useLocation();
    let fullURL = `${location.pathname}`;
    if (fullURL.startsWith("/")) {
      fullURL = fullURL.substring(1);
    }

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {toast.error(`Please go for login either you can't access ${fullURL}`)}
      </>
    );
  }
  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "*",
      Component: <NotFound />,
    },
  ];
  const PrivateRouteNames = [
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/services",
      Component: <Services />,
    },
    {
      path: "/course",
      Component: <Courses />,
    },
    {
      path: "/contact",
      Component: <Contact />,
    },
    {
      path: "course/apply/:courseId",
      Component: <ApplyCourse />,
    },
    {
      path: "/blogDetails/:courseId",
      Component: <CourseDetail />,
    },
    {
      path: "/feature",
      Component: <OurFeatures />,
    },
    {
      path: "/team",
      Component: <Team />,
    },
    {
      path: "/testimonial",
      Component: <Testimonial />,
    },
  ];
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {PublicRouteNames?.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                element={route.Component}
              />
            );
          })}

          {PrivateRouteNames?.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                element={<PrivateRoute>{route.Component}</PrivateRoute>}
              />
            );
          })}
        </Routes>
        <Footer />
        <BackToTopButton />
      </Router>
    </div>
  );
}

export default App;
