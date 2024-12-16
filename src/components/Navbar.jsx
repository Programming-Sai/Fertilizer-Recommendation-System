import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { BASE_PATH } from "../../BasePath";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="glass-nav">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
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
            Home
          </Link>
          <Link
            to={`${BASE_PATH}/about`}
            className={`${
              location.pathname === `${BASE_PATH}/about`
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            About
          </Link>
          <Link
            to={`${BASE_PATH}/contact`}
            className={`${
              location.pathname === `${BASE_PATH}/contact`
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            Contact
          </Link>
          <Link
            to={`${BASE_PATH}/predict`}
            className={`${
              location.pathname === `${BASE_PATH}/predict`
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            Predict
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
