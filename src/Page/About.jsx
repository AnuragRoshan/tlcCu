import React from "react";
import about from "../Data/about";
import "../Style/about.css";
import Sidemenu from "../Components/Sidemenu";

const About = () => {
  const sections = [
    "Introduction",
    "Mission",
    "Vision",
    "Goals",
    "Chancellor's Message",
    "Team TLC",
  ];

  return (
    <div className="about-top">
      <div style={{ flex: "2" }}>
        <Sidemenu menu={sections} />
      </div>
      <div className="about-main-top">
        <div className="about-main-inner">
          <div id="introduction" className="about-element">
            <div className="about-head">{about.introduction.title}</div>
            <div className="about-desc">{about.introduction.data}</div>
          </div>

          <div id="mission" className="about-element">
            <div className="about-head">{about.mission.title}</div>
            <div className="about-desc">{about.mission.data}</div>
          </div>
          <div id="vision" className="about-element">
            <div className="about-head">{about.vision.title}</div>
            <div className="about-desc">{about.vision.data}</div>
          </div>

          <div id="goals" className="about-element">
            <div className="about-head">{about.goals.title}</div>
            <ul>
              {about.goals.data.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
