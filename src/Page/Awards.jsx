import React from "react";
import Sidemenu from "../Components/Sidemenu";
import awards from "../Data/awards";

const Awards = () => {
  const sections = Object.keys(awards);
  const section = ["TLC Awards", "Research Grant"];

  return (
    <div className="about-top">
      <div style={{ flex: "2" }}>
        <Sidemenu menu={section} />
      </div>
      <div className="about-main-top">
        <div className="about-main-inner">
          {sections.map((section, index) => (
            <div id={section} className="about-element" key={index}>
              <div className="about-head">{awards[section].title}</div>
              <div className="about-desc">{awards[section].data}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
