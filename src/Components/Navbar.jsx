import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add a scroll event listener to the window
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // When scrolled down, set the navbar to be smaller and transparent
        setScrolled(true);
      } else {
        // When at the top, reset the navbar styles
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="linkstyle" to="/">
            {" "}
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="linkstyle" to="/about">
            {" "}
            AboutUs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="linkstyle" to="/course">
            {" "}
            Courses
          </Link>
        </li>
        <li className="nav-item">Resources </li>
        <li className="nav-item">
          <Link className="linkstyle" to="/research">
            {" "}
            Research
          </Link>
        </li>
        <li className="nav-item">
          <Link className="linkstyle" to="/events">
            {" "}
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="linkstyle" to="/awards">
            {" "}
            Awards
          </Link>
        </li>

        <li className="nav-item">Partnership</li>
        {/* <li className="nav-item">Journal</li> */}
        <li className="nav-item">
          <Link className="linkstyle" to="/journal">
            {" "}
            Journal
          </Link>
        </li>
        <li className="nav-item">Newsletter</li>
        <li className="nav-item">
          <Link className="linkstyle" to="/contact">
            {" "}
            Contact Us
          </Link>
        </li>
        <li className="nav-item">Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
