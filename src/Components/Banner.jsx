import React from "react";
import "../Style/navbar.css";

const Banner = () => {
  return (
    <div className="banner-top" style={{ position: "sticky" }}>
      <div
        className="banner-inner"
        style={{
          padding: "1rem",
          height: "5rem",
          overflow: "hidden", // Clear the float
          display: "flex",
          alignItems: "center", // Vertically center items
        }}
      >
        <div
          className="logo-wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="logo-1" style={{ marginRight: "2rem" }}>
            <img
              src="https://www.cuchd.in/tlc/assets/uploads/cu-logo.png"
              alt="Image 1"
              style={{ width: "14rem", marginLeft: "1rem" }}
            />
          </div>
          <div
            className="logo-3"
            style={{
              display: "flex",
              height: "fit-content",
            }}
          >
            <img
              src="https://tlccu.onrender.com/assets/uploads/TLC%20Logo%20(5).png"
              alt="Image 3"
              style={{ width: "9rem" }}
            />
          </div>
        </div>
        <div className="logo-2" style={{ marginLeft: "auto" }}>
          <img
            src="https://www.cuchd.in/tlc/assets/uploads/naac-logo.png"
            style={{
              width: "10rem",
              marginBlockStart: "0.2rem",
            }}
            alt="Image 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
