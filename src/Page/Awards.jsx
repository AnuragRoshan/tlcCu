import React from "react";
import Sidemenu from "../Components/Sidemenu";
import awards from "../Data/awards";
import Flowbanner from "../Components/Flowbanner";

const Awards = () => {
  const sections = Object.keys(awards);
  const section = ["TLC Awards", "Research Grant"];

  const page = "Awards";
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div className="about-top-inner">
          <div style={{ flex: "2" }}>
            <Sidemenu menu={section} />
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
