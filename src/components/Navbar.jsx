import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="glass-nav">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          FertilizerGuide
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/recommend" className="nav-link">
            About
          </Link>
          <Link to="/recommend" className="nav-link">
            Contact
          </Link>
          <Link to="/recommend" className="nav-link">
            Predict
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
