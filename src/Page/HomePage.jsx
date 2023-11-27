import React from "react";
import "../Style/home.css";
import Chancelormsg from "../Components/Homepage/Chancelormsg";
import Greatteacher from "../Components/Homepage/Greatteacher";
import Teacherlearning from "../Components/Homepage/Teacherlearning";
import Map from "../Components/Homepage/Map";

const HomePage = () => {
  return (
    <>
      <div className="home-top">
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
            <span> Teaching & </span>
            <div style={{ color: "white" }}> Learning Center</div>
          </div>
        </div>
      </div>
      <div>
        <Chancelormsg />
      </div>
      <div>
        <Greatteacher />
      </div>
      <div>
        <Teacherlearning />
      </div>
      <div>{/* <Map /> */}</div>
    </>
  );
};

export default HomePage;
