import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import "../Style/navbar.css";
// import Banner from "../Components/Banner";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1338);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1338);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {isMobile ? (
        <div
          className="menu-icon"
          style={{
            backgroundColor: "#ed1413",
            padding: "0.4rem",
            borderRadius: "0.5rem",
          }}
          onClick={toggleMenu}
        >
          <div
            style={{ position: "absolute", top: "-1rem", right: "-1rem" }}
            className={`icon ${menuOpen ? "open" : ""}`}
          >
            <div>
              <span
                class="material-symbols-outlined"
                style={{ color: "white" }}
              >
                menu
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/course" ? "active" : ""
            }`}
            to="/course"
          >
            Courses
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/teaching" ? "active" : ""
            }`}
            to="/teaching"
          >
            Teaching Resources
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/research" ? "active" : ""
            }`}
            to="/research"
          >
            Research
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/events" ? "active" : ""
            }`}
            to="/events"
          >
            Events
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/awards" ? "active" : ""
            }`}
            to="/awards"
          >
            Awards
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/journal" ? "active" : ""
            }`}
            to="/journal"
          >
            Journal
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link
            className={`linkstyle ${
              location.pathname === "/register" ? "active" : ""
            }`}
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
