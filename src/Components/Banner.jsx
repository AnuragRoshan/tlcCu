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
          display: "flex",
        }}
      >
        <div className="logo-1">
          <img
            src="https://www.cuchd.in/tlc/assets/uploads/cu-logo.png"
            alt="Image 1"
            style={{ width: "14rem", marginLeft: "1rem" }}
          />
        </div>
        <div className="logo-2">
          <img
            src="https://www.cuchd.in/tlc/assets/uploads/naac-logo.png"
            style={{ width: "10rem", marginLeft: "1rem" }}
            alt="Image 2"
          />
        </div>
        <div className="logo-3">
          <img
            src="https://tlccu.onrender.com/assets/uploads/TLC%20Logo%20(5).png"
            alt="Image 3"
            style={{ width: "9rem", marginLeft: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
