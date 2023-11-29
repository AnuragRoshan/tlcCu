import React, { Component } from "react";
import teachingData from "../Data/teaching.js"; // Import your teaching data
import "../Style/about.css"; // Add CSS styling for the teaching component
// import Sidemenu from "../Components/Sidemenu";
import Flowbanner from "../Components/Flowbanner";

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);
class Teaching extends Component {
  render() {
    const sections = Object.keys(teachingData);
    const page = "Teaching"; // Set the page title
    return (
      <>
        <Flowbanner name={page} />
        <div className="about-top">
          <div className="about-top-inner">
            <div style={{ flex: "2" }}>
              {/* <Sidemenu menu={sections} /> */}
              <div className="sidemenu-top">
                <div className="sidemenu-inner">
                  <div
                    className="menu-item"
                    //   key={index}
                    //   onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    <div className="sideMenu-item">
                      <div>Step-by-step Guidelines for Teaching</div>
                    </div>
                  </div>
                  <div
                    className="menu-item"
                    //   key={index}
                    //   onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    <div className="sideMenu-item">
                      <div>Podcasts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-main-top">
              <div className="about-main-inner">
                {sections.map((section) => (
                  <div key={section} id={section} className="about-element">
                    <div className="about-head">
                      {teachingData[section].title}
                    </div>
                    <img
                      src={teachingData[section].image}
                      alt={section}
                      className="about-image"
                      style={{ width: "28rem", margin: "0 10rem   " }}
                    />
                    <div className="about-desc">
                      {teachingData[section].data}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Teaching;
