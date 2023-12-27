import React from "react";
import "../Style/flow.css"; // You'll need to create the CSS file for styling

const Flowbanner = (props) => {
  return (
    <div className="flow-banner" style={{ position: "sticky" }}>
      <div className="gradient"></div>
      <div className="contents">
        <div className="breadcrumbs">
          <a style={{ color: "white" }} href="/">
            {" "}
            <span>Home</span>{" "}
          </a>
          &gt;&gt; <span>{props.name}</span>
        </div>
        <div style={{ fontSize: "450%" }}>{props.name}</div>
      </div>
    </div>
  );
};

export default Flowbanner;
