import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { BASE_PATH } from "../../BasePath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="glass-nav">
      <div className="container nav-container">
        <Link to={`${BASE_PATH}/`} className="nav-logo">
          🌱 FertilizerGuide
        </Link>
        <div className="nav-links">
          <Link
            to={`${BASE_PATH}/`}
            className={`${
              location.pathname === `${BASE_PATH}/`
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            <span>Home</span>
            <div>
              <FontAwesomeIcon icon={faHome} />
            </div>
          </Link>
          <Link
            to={`${BASE_PATH}/predict`}
            className={`${
              location.pathname === `${BASE_PATH}/predict`
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            <span>Predict</span>
            <div>
              <FontAwesomeIcon icon={faMagicWandSparkles} />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
