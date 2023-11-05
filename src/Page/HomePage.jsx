import React from "react";
import "../Style/home.css";
import Chancelormsg from "../Components/Homepage/Chancelormsg";
import Greatteacher from "../Components/Homepage/Greatteacher";
import Teacherlearning from "../Components/Homepage/Teacherlearning";
import Map from "../Components/Homepage/Map";

const HomePage = () => {
  return (
    <>
      <div class="diagonal-div"></div>
      <img
        src="https://github.com/AnuragRoshan/images/blob/main/student3.png?raw=true"
        alt="Image over red side"
        className="image-over-red"
      />
      {/* <img
        src="https://www.cuchd.in/tlc/assets/uploads/cu-logo.png"
        className="logo-over-red"
      ></img>
      <img
        src="https://www.cuchd.in/tlc/assets/uploads/naac-logo.png"
        className="naac-logo-over-red"
      ></img>
      <img
        src="https://tlccu.onrender.com/assets/uploads/TLC%20Logo%20(5).png"
        className="tlc-logo-over-red"
      ></img> */}
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
      <div>
        <Greatteacher />
      </div>
      <div>
        <Teacherlearning />
      </div>
      <div>
        <Map />
      </div>
    </>
  );
};

export default HomePage;
