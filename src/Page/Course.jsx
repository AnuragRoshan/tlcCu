import React, { useEffect } from "react";
import "../Style/about.css"; // You can reuse the same CSS styles
import Sidemenu from "../Components/Sidemenu";
import course from "../Data/course";
import Flowbanner from "../Components/Flowbanner";

const Course = () => {
  const sections = Object.keys(course);
  const section = [
    "Certificate Programme on Teaching Excellence in Higher Education",
    "Diploma Programme on Teaching Excellence in Higher Education",
    "Certificate Programme in Administrative Continuous Professional Development & Engagement (CPDE)",
    "School Teachers Training & Engagement Programme (STTEP)",
    "Online Courses",
  ];

  const page = "Courses";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div className="about-top-inner">
          <div style={{ flex: "2" }}>
            <Sidemenu menu={section} />
            <div className="side-image">
              <div
                style={{
                  marginBlockEnd: "1rem",
                  height: "30%",
                  borderRadius: "1rem 1rem  1rem 1rem ",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1514466256797-efd55fa1bf4e?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    // borderRadius: "1rem 1rem  1rem 1rem ",
                    marginBlockStart: "1rem",
                    borderInlineEnd: "10px solid #2c3456",
                    borderBlockStart: "10px solid #2c3456",
                    // borderRadius: "6rem 0  0 6rem ",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="about-main-top">
            <div className="about-main-inner">
              {sections.map((section, index) => (
                <div id={index} className="about-element" key={index}>
                  <div className="about-head">{course[section].title}</div>
                  <div className="about-desc">
                    {course[section].description}
                  </div>
                  {course[section].hasOwnProperty("topicsCovered") && (
                    <div className="about-desc">Topics Covered:</div>
                  )}
                  <ul>
                    {course[section].topicsCovered &&
                      course[section].topicsCovered.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                  </ul>
                  {course[section].hasOwnProperty("programmeHighlights") && (
                    <div className="about-desc">Programme Highlights:</div>
                  )}
                  <ul>
                    {course[section].programmeHighlights &&
                      course[section].programmeHighlights.map(
                        (highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        )
                      )}
                  </ul>
                  {course[section].hasOwnProperty("keyAreasCovered") && (
                    <div className="about-desc">Key Areas Covered:</div>
                  )}
                  <ul>
                    {course[section].keyAreasCovered &&
                      course[section].keyAreasCovered.map((area, areaIndex) => (
                        <li key={areaIndex}>{area}</li>
                      ))}
                  </ul>
                  {course[section].hasOwnProperty("programmeFeatures") && (
                    <div className="about-desc">Programme Features:</div>
                  )}
                  <ul>
                    {course[section].programmeFeatures &&
                      course[section].programmeFeatures.map(
                        (feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        )
                      )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
