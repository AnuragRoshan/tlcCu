import React from "react";
import "../../Style/home.css";
import Card from "./Card";

const Greatteacher = () => {
  return (
    <div className="grt-top">
      <div className="grt-head">
        Great <span style={{ color: "black" }}>Teacher</span> Of India
      </div>
      <div className="grt-card">
        <Card
          name="Guru Nanak Dev"
          src="https://tlccu.onrender.com/assets/uploads/Guru%20Nanak.jpg"
        />
        <Card
          name="Guru Nanak Dev"
          src="https://tlccu.onrender.com/assets/uploads/Guru%20Nanak.jpg"
        />
        <Card
          name="Guru Nanak Dev"
          src="https://tlccu.onrender.com/assets/uploads/Guru%20Nanak.jpg"
        />
        <Card
          name="Guru Nanak Dev"
          src="https://tlccu.onrender.com/assets/uploads/Guru%20Nanak.jpg"
        />
        <Card
          name="Guru Nanak Dev"
          src="https://tlccu.onrender.com/assets/uploads/Guru%20Nanak.jpg"
        />
      </div>
    </div>
  );
};

export default Greatteacher;
