import React from "react";
import "../Style/flow.css"; // You'll need to create the CSS file for styling

const Flowbanner = (props) => {
  return (
    <div className="flow-banner">
      <div className="gradient"></div>
      <div className="contents">
        <div className="breadcrumbs">
          <a style={{ color: "white" }} href="/">
            {" "}
            <span>Home</span>{" "}
          </a>
          &gt;&gt; {props.name}
        </div>
        <div style={{ fontSize: "3rem" }}>{props.name}</div>
      </div>
    </div>
  );
};

export default Flowbanner;