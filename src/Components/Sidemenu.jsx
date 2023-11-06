import React, { useState } from "react";
import "../Style/sidemenu.css";

const Sidemenu = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      setSelectedItem(sectionId);
    }
  };

  return (
    <div className="sidemenu-top">
      <div className="sidemenu-inner">
        {props.menu.map((item, index) => (
          <div
            className={`menu-item ${
              selectedItem === item.toLowerCase() ? "selected" : ""
            }`}
            key={index}
            onClick={() => scrollToSection(index)}
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
