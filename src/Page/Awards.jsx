import React, { useEffect } from "react";
import Sidemenu from "../Components/Sidemenu";
import awards from "../Data/awards";
import Flowbanner from "../Components/Flowbanner";

const Awards = () => {
  const sections = Object.keys(awards);
  const section = ["TLC Awards", "Research Grant"];

  const page = "Awards";
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
                  src="https://images.unsplash.com/photo-1639503667014-6533f3f34831?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",

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
                  <div className="about-head">{awards[section].title}</div>
                  <div className="about-desc">{awards[section].data}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
