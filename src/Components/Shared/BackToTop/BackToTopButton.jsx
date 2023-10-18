import  { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`back-to-top ${showButton ? "show" : ""}`}>
      <button
        className="btn btn-lg btn-primary btn-lg-square"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </button>
    </div>
  );
};

export default BackToTopButton;
