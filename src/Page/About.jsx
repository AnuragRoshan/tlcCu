import React from "react";
import about from "../Data/about";
import "../Style/about.css";
import Sidemenu from "../Components/Sidemenu";
import Flowbanner from "../Components/Flowbanner";

const About = () => {
  const sections = [
    "Introduction",
    "Mission",
    "Vision",
    "Goals",
    "Chancellor's Message",
    "Team TLC",
  ];

  const page = "About Us";
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div style={{ flex: "2" }}>
          <Sidemenu menu={sections} />
        </div>
        <div className="about-main-top">
          <div className="about-main-inner">
            <div id="0" className="about-element">
              <div className="about-head">{about.introduction.title}</div>
              <div className="about-desc">{about.introduction.data}</div>
            </div>

            <div id="1" className="about-element">
              <div className="about-head">{about.mission.title}</div>
              <div className="about-desc">{about.mission.data}</div>
            </div>
            <div id="2" className="about-element">
              <div className="about-head">{about.vision.title}</div>
              <div className="about-desc">{about.vision.data}</div>
            </div>

            <div id="3" className="about-element">
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
    </>
  );
};

export default About;
