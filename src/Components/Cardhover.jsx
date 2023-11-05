import React from "react";
import "../Style/cardhover.css";

const Cardhover = (props) => {
  const { head, title, date, desc } = props.events; // Destructure the event data from props

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <div
                  style={{
                    textAlign: "center",
                    marginBlockStart: "4rem",
                    fontSize: "1.4rem",
                    textDecoration: "underline",
                    // position: "absolute",
                  }}
                >
                  {head}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    top: "8rem",
                    paddingBlockStart: "1rem",
                    // position: "absolute",
                  }}
                >
                  {title}
                </div>
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center", // Center vertically
                  justifyContent: "center", // Center horizontally
                }}
              >
                <div>
                  <i className="material-symbols-outlined">calendar_month</i>
                </div>
                <div style={{ fontSize: "1rem" }}>{date}</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginBlockStart: "1rem",
                  fontSize: "0.8rem",
                }}
              >
                {desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardhover;
