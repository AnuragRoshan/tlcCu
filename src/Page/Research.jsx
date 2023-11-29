import React, { useEffect } from "react";
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
                  height: "0%",
                  borderRadius: "1rem 1rem  1rem 1rem ",
                }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1676325102413-f60b77fc1566?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    borderInlineEnd: "10px solid #2c3456",
                    borderBlockStart: "10px solid #2c3456",
                    // opacity: "0.8",
                  }}
                />

                <img
                  src="https://images.unsplash.com/photo-1583912268183-a34d41fe464a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    // opacity: "0.8",
                    marginBlockStart: "1rem",
                    height: "max-content",
                    borderInlineEnd: "10px solid #2c3456",
                    borderBlockStart: "10px solid #2c3456",
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1566996164994-cc20c015d305?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFBoeXNpY3MlMjBSZXNlYXJjaHxlbnwwfDF8MHx8fDA%3D"
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    // opacity: "0.8",
                    marginBlockStart: "1rem",
                    height: "max-content",
                    borderInlineEnd: "10px solid #2c3456",
                    borderBlockStart: "10px solid #2c3456",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="about-main-top">
            <div className="about-main-inner">
              {sections.map((section, index) => (
                <div id={index} className="about-element" key={index}>
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
                      research[section].projects.map(
                        (project, projectIndex) => (
                          <li key={projectIndex}>{project}</li>
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

export default Research;
