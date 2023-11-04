import React from "react";
import "../Style/sidemenu.css";

const Sidemenu = (props) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="sidemenu-top">
      <div className="sidemenu-inner">
        {props.menu.map((item, index) => (
          <div
            className="menu-item"
            key={index}
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            <div className="sideMenu-item">
              <div>{item}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidemenu;
