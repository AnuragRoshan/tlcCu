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
          name="Savitribai Phule"
          src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/jbp.jpg?raw=true"
        />
        <Card
          name="Dr APJ Abdul Kalam"
          src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/apj.jpg?raw=true"
        />
        <Card
          name="Dr. Sarvepalli Radhakrishnan"
          src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/nnn.jpg?raw=true"
        />
        <Card
          name="Rabindranath Tagore"
          src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/rnt1.jpg?raw=true"
        />
        <Card
          name="Swami Vivekananda"
          src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/sv.jpg?raw=true"
        />
      </div>
    </div>
  );
};

export default Greatteacher;
