import React, { useEffect } from "react";
import "../Style/home.css";
import Chancelormsg from "../Components/Homepage/Chancelormsg";
import Greatteacher from "../Components/Homepage/Greatteacher";
import Teacherlearning from "../Components/Homepage/Teacherlearning";
import Map from "../Components/Homepage/Map";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const top = window.scrollY;
      const offsetMargin = 800; // Adjust this value to change when the class is added

      sections.forEach((sec) => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;

        if (top >= offset - offsetMargin && top < offset + height) {
          sec.classList.add("show-animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <section className="home-top sec-1 show-animate">
        <div className="home-banner">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image over red side"
            className="home-banner-image"
          />
        </div>
        <div className="home-banner-text">
          <div className="banner-desc">
            FACILITATING SUSTAINED PROFESSIONAL DEVELOPMENT
          </div>
          <div className="banner-head">
            <div style={{ color: "white" }}>
              Teaching & <br />
              Learning Center
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <Chancelormsg />
      </section>
      <section className="sec-3">
        <Greatteacher />
      </section>
      <section className="sec-4 ">
        <Teacherlearning />
      </section>
      <div>{/* <Map /> */}</div>
    </>
  );
};

export default HomePage;
