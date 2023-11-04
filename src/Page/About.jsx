import React from "react";
import about from "../Data/about";
import "../Style/about.css";
import Sidemenu from "../Components/Sidemenu";

const About = () => {
  const sections = ["introduction", "mission", "goals"];

  //   if (!about) {
  //     return null; // or you can return a loading indicator
  //   }

  return (
    <div className="about-top">
      <div style={{ flex: "2" }}>
        <Sidemenu menu={sections} />
      </div>
      <div style={{ flex: "5" }}>Main Area</div>
    </div>
  );
};

export default About;
