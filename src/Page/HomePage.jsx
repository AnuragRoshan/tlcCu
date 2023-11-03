import React from "react";
import "../Style/home.css";
import Chancelormsg from "../Components/Homepage.jsx/Chancelormsg";

const HomePage = () => {
  return (
    <>
      <div class="diagonal-div"></div>
      <img
        src="https://github.com/AnuragRoshan/images/blob/main/student3.png?raw=true"
        alt="Image over red side"
        className="image-over-red"
      />
      <img
        src="https://www.cuchd.in/tlc/assets/uploads/cu-logo.png"
        className="logo-over-red"
      ></img>
      <img
        src="https://www.cuchd.in/tlc/assets/uploads/naac-logo.png"
        className="naac-logo-over-red"
      ></img>
      <img
        src="https://www.cuchd.in/tlc/assets/uploads/tlc-logo.png"
        className="tlc-logo-over-red"
      ></img>
      <div className="text-over-red">
        <h1 className="text-over-red-head">
          <div className="text-over-red-desc">
            FACILITATING SUSTAINED PROFESSIONAL DEVELOPMENT
          </div>
          Teaching & <br />{" "}
          <span className="text-over-red-below">Learning Center</span>
        </h1>
      </div>
      <div>
        <Chancelormsg />
      </div>
    </>
  );
};

export default HomePage;
