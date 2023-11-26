import React from "react";
import "../Style/home.css";
import Chancelormsg from "../Components/Homepage/Chancelormsg";
import Greatteacher from "../Components/Homepage/Greatteacher";
import Teacherlearning from "../Components/Homepage/Teacherlearning";
import Map from "../Components/Homepage/Map";

const HomePage = () => {
  return (
    <>
      {/* <div class="spinner-3"></div> */}
      <div class="diagonal-div"></div>
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className="text-over-below">
            <div style={{ width: "max-content" }}>
              Teaching & <br />{" "}
            </div>
            <span
              className="text-over-red-below"
              style={{ width: "max-content" }}
            >
              Learning Center
            </span>
          </div>
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
      <div>{/* <Map /> */}</div>
    </>
  );
};

export default HomePage;
