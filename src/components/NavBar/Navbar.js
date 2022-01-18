import React from "react";
import App from "../../App.css";
import { NavLink, Link } from "react-router-dom";
let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="fs-1 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
                          button[aria-expanded="false"] > .close{
                              display:none;
                          }
                          button[aria-expanded="true"]>.open{
                              display:none;
                          }
                          `}
          </style>
          <i className="fas fa-bars open text-primary"></i>
          <i className="fas fa-times close text-dark"> </i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName={`${App.active}`}
                to="/"
                className="nav-link fs-5 "
              >
                Characters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/episodes" className="nav-link fs-5">
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/location" className="nav-link fs-5">
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
