import React, { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [isDark, setDark] = useState(false);

  const handleRadio = (e) => {
    setDark(e.target.checked)
  };

  const DarkModeEffect = createContext()

  return (
    <div style={isDark ? {backgroundColor :"black"} :{}}>
      {/* Enhanced Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg dark ">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">MyApp</Link>

          {/* Toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

              {/* Dark Mode toggle styled */}
              <li className="nav-item ms-3">
                <div className="form-check form-switch text-light">
                  <input
                    name="dark"
                    onChange={handleRadio}  
                    className="form-check-input"
                    type="checkbox"
                    id="darkModeSwitch"
                  />
                  <label className="form-check-label" htmlFor="darkModeSwitch">
                    Dark Mode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}
