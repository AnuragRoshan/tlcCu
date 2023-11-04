import React from "react";
import "../Style/sidemenu.css";

const Sidemenu = (props) => {
  return (
    <div className="sidemenu-top">
      <div className="sidemenu-inner">
        {props.menu.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Sidemenu;
