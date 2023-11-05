import React from "react";
import Sidemenu from "../Components/Sidemenu";
import research from "../Data/research";
import Flowbanner from "../Components/Flowbanner";

const sections = Object.keys(research);

const Research = () => {
  const section = [
    "Overview",
    "Research Publications",
    "Research Projects",
    "Faculty Development Programmes (FDPs)",
    "Seminars/Conferences",
    "Workshops",
    "Collaborate with Us",
  ];
  const page = "Research";
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div style={{ flex: "2" }}>
          <Sidemenu menu={section} />
        </div>
        <div className="about-main-top">
          <div className="about-main-inner">
            {sections.map((section, index) => (
              <div id={section} className="about-element" key={index}>
                <div className="about-head">{research[section].title}</div>
                <div className="about-desc">{research[section].data}</div>
                {research[section].details && (
                  <div className="about-desc">Details:</div>
                )}
                <ul>
                  {research[section].details &&
                    research[section].details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                </ul>
                {research[section].projects && (
                  <div className="about-desc">Projects:</div>
                )}
                <ul>
                  {research[section].projects &&
                    research[section].projects.map((project, projectIndex) => (
                      <li key={projectIndex}>{project}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
