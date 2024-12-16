import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  // Define the styles for different pages
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const is = location.pathname === "/about";

  return (
    <nav className="glass-nav">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          FertilizerGuide
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact"
                ? "nav-link-active nav-link"
                : "nav-link"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/predict"
            className={`${
              location.pathname === "/predict"
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
