import React from "react";
import "../../Style/home.css";
const Card = (props) => {
  const image = props.src;
  const name = props.name;
  return (
    <div className="card-top">
      <div className="grt-card-box">
        <img src={image} alt="" />
        <div
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            marginTop: "1rem",
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Card;
