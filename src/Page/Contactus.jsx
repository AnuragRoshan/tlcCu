import React, { useEffect } from "react";
import Flowbanner from "../Components/Flowbanner";

const Contactus = () => {
  const page = "Contact Us";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div className="about-top-inner">
          <div className="about-main-top">
            <div className="about-main-inner">
              <div
                className="about-element"
                style={{
                  display: "flex",
                  width: "70%",
                }}
              >
                <div>
                  <span
                    class="material-symbols-outlined"
                    style={{
                      fontSize: "2rem",
                      borderRadius: "50%",
                      padding: "0.4rem",
                      marginInline: "0.5rem",
                      marginBlockStart: "20%",
                      backgroundColor: "#2c3456",
                    }}
                  >
                    home
                  </span>
                </div>
                <div>
                  <div className="about-head">Address</div>
                  <div className="about-desc" style={{ width: "100%" }}>
                    Teaching Learning Centre, Block B3 Chandigarh University,
                    NH-05 Chandigarh-Ludhiana Highway, Mohali, Punjab
                    (INDIA)-140413
                  </div>
                </div>
              </div>
              <div
                className="about-element"
                style={{ display: "flex", width: "70%" }}
              >
                <div>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "2rem",
                      borderRadius: "50%",
                      padding: "0.4rem",
                      marginInline: "0.5rem",
                      backgroundColor: "#2c3456",
                    }}
                  >
                    mail
                  </span>
                </div>
                <div>
                  <div className="about-head">Email</div>
                  <div className="about-desc">
                    {" "}
                    <a href="mailto:ed.tlc@cumail.in" style={{ color: "blue" }}>
                      ed.tlc@cumail.in
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="about-element"
                style={{ display: "flex", width: "70%" }}
              >
                <div>
                  <span
                    class="material-symbols-outlined"
                    style={{
                      fontSize: "2rem",
                      borderRadius: "50%",
                      padding: "0.4rem",
                      backgroundColor: "#2c3456",
                      marginInline: "0.5rem",
                    }}
                  >
                    phone
                  </span>
                </div>
                <div>
                  <div className="about-head">Contact Number</div>
                  <div className="about-desc">
                    {" "}
                    <a href="tel:+" style={{ color: "blue" }}>
                      {" "}
                      70874-59999
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="about-element"
                style={{ display: "flex", width: "70%" }}
              >
                <div>
                  <span
                    class="material-symbols-outlined"
                    style={{
                      fontSize: "2rem",
                      borderRadius: "50%",
                      padding: "0.4rem",
                      marginInline: "0.5rem",
                      backgroundColor: "#2c3456",
                    }}
                  >
                    video_library
                  </span>
                </div>
                <div>
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
      </div>
    </>
  );
};

export default Contactus;
