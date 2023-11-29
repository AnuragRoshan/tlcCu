import React, { useEffect } from "react";
import Sidemenu from "../Components/Sidemenu";
import awards from "../Data/awards";
import Flowbanner from "../Components/Flowbanner";

const Teamtlc = () => {
  // const sections = ["Introduction", "Mission", "Vision", "Goals"];

  // // const sections = Object.keys(awards);
  // const section = ["TLC Awards", "Research Grant"];

  const page = "Our Team";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div style={{ flex: "2" }}>
          <Sidemenu menu={[]} />
        </div>
        <div className="about-main-top">
          <div className="about-head"></div>
          <div className="about-main-inner">
            <div id={0} className="about-element" key={0}>
              <div className="about-head">Prof. (Dr.) Sanjaya Kumar Das</div>
              <div className="about-desc">
                Executive Director Email ID:{" "}
                <a href="mailto:ed.tlc@cumail.in">ed.tlc@cumail.in</a>
              </div>
            </div>
            <div id={1} className="about-element" key={1}>
              <div className="about-head">Dr. Daisy Kaur</div>
              <div className="about-desc">
                Associate Professor Email ID:{" "}
                <a href="mailto:daisy.e9375@cumail.in">daisy.e9375@cumail.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamtlc;
