import React from "react";
import Flowbanner from "../Components/Flowbanner";

const Contactus = () => {
  const page = "Contact Us";
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div className="about-top-inner">
          <div className="about-main-top">
            <div className="about-main-inner">
              <div className="about-element">
                <div className="about-head">Address</div>
                <div className="about-desc">
                  Teaching Learning Centre, Block B3 Chandigarh University,
                  NH-05 Chandigarh-Ludhiana Highway, Mohali, Punjab
                  (INDIA)-140413
                </div>
              </div>
              <div className="about-element">
                <div className="about-head">Email</div>
                <div className="about-desc">ed.tlc@cumail.in</div>
              </div>
              <div className="about-element">
                <div className="about-head">Contact Number</div>
                <div className="about-desc">
                  {" "}
                  <a href="tel:+" style={{ color: "blue" }}>
                    {" "}
                    70874-59999
                  </a>
                </div>
              </div>
              <div className="about-element">
                <div className="about-head">YouTube Channel</div>
                <div className="about-desc">
                  <a
                    href="https://www.youtube.com/@cuteachinglearningcentre4832"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "blue" }}
                  >
                    https://www.youtube.com/@cuteachinglearningcentre4832
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
