import React from "react";
import "../Style/about.css"; // You can reuse the same CSS styles
import Sidemenu from "../Components/Sidemenu";
import course from "../Data/course";

const Course = () => {
  const sections = Object.keys(course);
  const section = [
    "Certificate Programme on Teaching Excellence in Higher Education",
    "Diploma Programme on Teaching Excellence in Higher Education",
    "Certificate Programme in Administrative Continuous Professional Development & Engagement (CPDE)",
    "School Teachers Training & Engagement Programme (STTEP)",
    "Online Courses",
  ];

  return (
    <div className="about-top">
      <div style={{ flex: "2" }}>
        <Sidemenu menu={section} />
      </div>
      <div className="about-main-top">
        <div className="about-main-inner">
          {sections.map((section, index) => (
            <div
              id={course[section].title}
              className="about-element"
              key={index}
            >
              <div className="about-head">{course[section].title}</div>
              <div className="about-desc">{course[section].description}</div>
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
  );
};

export default Course;
