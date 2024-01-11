import React from "react";
import "../Style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot-top" style={{ fontFamily: "Montserrat" }}>
      <div className="footer">
        <div className="footer-section left-section">
          <img
            src="https://www.cuchd.in/tlc/assets/uploads/cu-logo.png"
            alt="Logo"
          />
        </div>
        <div className="footer-section mid-section">
          <h4>Get in Touch</h4>
          <p>
            Chandigarh University NH-05 Chandigarh-Ludhiana Highway, Mohali,
            Punjab (INDIA) General Helpline No:{" "}
            <p>
              General Helpline No:
              <a href="tel: +911603051003"> +91-160-3051003</a>
            </p>
          </p>
        </div>
        <div className="footer-section right-section">
          <h4>Helplines</h4>
          <p>
            Phone: <a href="tel:1800121288800">1800 1212 88800</a> <br />
            Email:{" "}
            <a href="mailto:admissions@cumail.in">admissions@cumail.in</a>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          // backgroundColor: "#2c3456",
          flexWrap: "center",
          textAlign: "left",
          flexDirection: "row",
          paddingInline: "2rem",
          paddingBlock: "1rem",
        }}
      >
        <div style={{ flex: "2", lineHeight: "3rem" }}>
          <div style={{ flex: "1", color: "white", cursor: "pointer" }}>
            <Link to="/about">About Us</Link>
          </div>

          <div
            style={{
              color: "white",
            }}
          >
            <Link to="/course">Courses</Link>
          </div>
          <div
            style={{
              flex: "1",
              color: "white",
            }}
          >
            <Link to="/research">Research</Link>
          </div>
          <div
            style={{
              flex: "1",
              color: "white",
            }}
          >
            <Link to="/events">Events</Link>
          </div>
        </div>
        {/* <div
        style={{
          display: "flex",
          backgroundColor: "#2c3456",
          display: "flex",
          textAlign: "left",
          flexDirection: "column",
          paddingInline: "2rem",
          paddingBlock: "1rem",
        }}
      > */}
        <div style={{ flex: "2", lineHeight: "3rem" }}>
          <div
            style={{
              flex: "1",
              color: "white",
            }}
          >
            <Link to="/awards">Awards</Link>
          </div>
          <div
            style={{
              flex: "1",
              color: "white",
            }}
          >
            <Link to="/journal">Journal</Link>
          </div>
          <div
            style={{
              flex: "1",
              color: "white",
            }}
          >
            <Link to="/contact">Contact Us</Link>
            {/* </div> */}
          </div>
        </div>
        <div
          style={{
            flex: "3",
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div style={{ flex: "1" }}>
            <a href="tel:+70874-59999" style={{ color: "blue" }}>
              <span className="material-symbols-outlined">phone_in_talk</span>
            </a>
          </div>
          <div style={{ flex: "1" }}>
            <span className="material-symbols-outlined">pin_drop</span>
          </div>
          {/* <div style={{ flex: "1", paddingBlock: "1rem" }}> */}
          <div style={{ flex: "1" }}>
            <a href="mailto:ed.tlc@cumail.in" style={{ color: "blue" }}>
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
          {/* <div style={{ flex: "1", paddingBlock: "1rem" }}> */}
          <div style={{ flex: "1" }}>
            <a
              href="https://www.youtube.com/@cuteachinglearningcentre4832"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        <div className="foot-desc" style={{ flex: "8" }}>
          Chandigarh University, Punjab [CU] is the Best University in Punjab
          and North India that offers various Undergraduate and Post graduate
          Courses like B.Tech, BCA, BBA, HMCT, B.Com, LLB, B.Arch, MBA, M.Tech,
          B.Com, M.Com, Journalism and MCA at an affordable fees in Chandigarh.{" "}
          <a href=""> Apply Now </a>
          at India's Best Private University in Punjab, Chandigarh which
          provides top placements.
        </div>
      </div>
      {/* <div
        style={{
          height: "max-content",
          borderRadius: "1px solid white",
        }}
      >
        
      </div> */}
    </div>
  );
};

export default Footer;
