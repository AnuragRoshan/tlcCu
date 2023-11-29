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
              <div className="side-image">
                <div
                  style={{
                    marginBlockEnd: "1rem",
                    height: "0%",
                    borderRadius: "1rem 1rem  1rem 1rem ",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW5pbmclMjBidXNpbmVzc3xlbnwwfDF8MHx8fDI%3D"
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
                    src="https://images.unsplash.com/photo-1507537417841-81e85feb9bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYWluaW5nJTIwYnVzaW5lc3N8ZW58MHwxfDB8fHwy"
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
                    src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW5pbmclMjBidXNpbmVzc3xlbnwwfDF8MHx8fDI%3D"
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
                    src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWluaW5nJTIwYnVzaW5lc3N8ZW58MHwxfDB8fHwy"
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
