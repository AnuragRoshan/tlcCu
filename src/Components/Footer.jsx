import React from "react";
import "../Style/footer.css";

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
        <div
          style={{
            flex: "3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#2c3456",
            color: "white",
          }}
        >
          <div style={{ flex: "1", paddingBlock: "1rem" }}>
            <span
              className="material-symbols-outlined"
              style={{
                padding: "1rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "1rem",
                cursor: "pointer",
              }}
            >
              phone_in_talk
            </span>
          </div>
          <div style={{ flex: "1", paddingBlock: "1rem" }}>
            <span
              className="material-symbols-outlined"
              style={{
                padding: "1rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "1rem",
                cursor: "pointer",
              }}
            >
              pin_drop
            </span>
          </div>
          <div style={{ flex: "1", paddingBlock: "1rem" }}>
            <span
              style={{
                padding: "1rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "1rem",
                cursor: "pointer",
              }}
              className="material-symbols-outlined"
            >
              mail
            </span>
          </div>
          <div style={{ flex: "1", paddingBlock: "1rem" }}>
            <span
              style={{
                padding: "1rem",
                backgroundColor: "white",
                color: "black",
                borderRadius: "1rem",
                cursor: "pointer",
              }}
              className="material-symbols-outlined"
            >
              play_circle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
