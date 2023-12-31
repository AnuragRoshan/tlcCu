import React, { useEffect } from "react";
import about from "../Data/about";
import "../Style/about.css";
import Sidemenu from "../Components/Sidemenu";
import Flowbanner from "../Components/Flowbanner";
import { useNavigate } from "react-router-dom";

const About = () => {
  const sections = ["Introduction", "Mission", "Vision", "Goals"];

  const page = "About Us";

  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="side-image">
              <div
                style={{
                  marginBlockEnd: "1rem",
                  height: "30%",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1670934265254-954bd96352ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                  style={{
                    borderInlineEnd: "10px solid #2c3456",
                    borderBlockStart: "10px solid #2c3456",
                    width: "100%",
                  }}
                />
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
