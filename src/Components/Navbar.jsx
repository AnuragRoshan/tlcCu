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
          <Link className="linkstyle" to="/homeee">
            {" "}
            AboutUs
          </Link>
        </li>
        <li className="nav-item">Courses </li>
        <li className="nav-item">Resources </li>
        <li className="nav-item">Research </li>
        <li className="nav-item">Events</li>
        <li className="nav-item">Awards</li>
        <li className="nav-item">Partnership</li>
        <li className="nav-item">Journal</li>
        <li className="nav-item">Newsletter</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
