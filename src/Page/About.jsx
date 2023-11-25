import React from "react";
import about from "../Data/about";
import "../Style/about.css";
import Sidemenu from "../Components/Sidemenu";
import Flowbanner from "../Components/Flowbanner";
import { Navigate, useNavigate } from "react-router-dom";

const About = () => {
  const sections = ["Introduction", "Mission", "Vision", "Goals"];

  const page = "About Us";

  const Navigate = useNavigate();

  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div className="about-top-inner">
          <div style={{ flex: "2" }}>
            <Sidemenu menu={sections} />
            <div className="sidemenu-top" style={{ padding: "0 2rem 0 2rem" }}>
              <div className="sidemenu-inner">
                <div className="menu-item" onClick={() => Navigate("/teamtlc")}>
                  <div className="sideMenu-item">
                    <div>Team TLC</div>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    </>
  );
};

export default About;
