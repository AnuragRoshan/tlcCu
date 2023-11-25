import React from "react";
import "../../Style/home.css";
import Card from "./Card";

const Greatteacher = () => {
  const data = [
    {
      wiki: "https://en.wikipedia.org/wiki/Guru_Nanak",
      name: "Guru Nanak Dev",
      img: "https://tlccu.onrender.com/assets/uploads/Guru%20Nanak.jpg",
    },
    {
      wiki: "https://en.wikipedia.org/wiki/Savitribai_Phule",
      name: "Savitribai Phule",
      img: "https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/jbp.jpg?raw=true",
    },
    {
      wiki: "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam",
      name: "Dr APJ Abdul Kalam",
      img: "https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/apj.jpg?raw=true",
    },
    {
      wiki: "https://en.wikipedia.org/wiki/Sarvepalli_Radhakrishnan",
      name: "Dr. Sarvepalli Radhakrishnan",
      img: "https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/nnn.jpg?raw=true",
    },
    {
      wiki: " https://en.wikipedia.org/wiki/Rabindranath_Tagore",
      name: "Rabindranath Tagore",
      img: "https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/rnt1.jpg?raw=true",
    },
    {
      wiki: " https://en.wikipedia.org/wiki/Swami_Vivekananda",
      name: "Swami Vivekananda",
      img: "https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/sv.jpg?raw=true",
    },
  ];
  return (
    <div className="grt-top">
      <div className="grt-top-inner">
        <div className="grt-head">
          Great <span style={{ color: "#f7a300" }}>Teachers</span> Of India
        </div>

        <div className="grt-card">
          <a href="https://en.wikipedia.org/wiki/Guru_Nanak">
            <Card
              name="Guru Nanak Dev"
              src="https://tlccu.onrender.com/assets/uploads/Guru%20Nanak.jpg"
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/Savitribai_Phule">
            <Card
              name="Savitribai Phule"
              src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/jbp.jpg?raw=true"
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam">
            <Card
              name="Dr APJ Abdul Kalam"
              src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/apj.jpg?raw=true"
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/Sarvepalli_Radhakrishnan">
            <Card
              name="Dr. Sarvepalli Radhakrishnan"
              src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/nnn.jpg?raw=true"
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/Rabindranath_Tagore">
            <Card
              name="Rabindranath Tagore"
              src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/rnt1.jpg?raw=true"
            />
          </a>
          <a href="https://en.wikipedia.org/wiki/Swami_Vivekananda">
            <Card
              name="Swami Vivekananda"
              src="https://github.com/AnuragRoshan/tlcCu/blob/main/src/Images/sv.jpg?raw=true"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greatteacher;
