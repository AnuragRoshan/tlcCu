import React from "react";
import "../../Style/home.css";

const Chancelormsg = () => {
  return (
    <div className="chm-top">
      <div className="chm-head">Chancellor's Message</div>
      <div className="chm-info">
        <div className="chm-msg">
          <div>
            <span
              style={{
                fontSize: "4rem",
                fontFamily: "serif",
                color: "#f7a300",
              }}
            >
              T
            </span>
            he Teaching Learning Centre (TLC) at Chandigarh University
            represents a significant milestone in our unwavering commitment to
            nurture an environment of academic excellence and innovation. This
            centre aspires to work in sync with the core values of Chandigarh
            University centred around Human Dignity, Empathy, Giving and
            Humility by promoting inclusivity, understanding, support, and
            personalized growth of the faculty. Chandigarh University By
            fostering a culture of lifelong learning among faculty, we wish to
            ensure that our teaching practices remain pertinent, effective, and
            impactful.
            <br />
            <br />
            To that end, Teaching Learning Centre has been meticulously designed
            to offer a variety of faculty development and teaching innovation
            programmes through a dynamic learning environment. It will serve as
            a pivot for continuous pedagogical advancement and knowledge sharing
            for the vibrant community of educators who are committed to
            fostering the talents and potential of students. Being cognizant of
            the need to prepare the faculty for ever-evolving educational realm,
            TLC strives to equip faculty with necessary skills, competencies and
            innovative pedagogical approaches to stay updated with the latest
            educational trends and technologies. Accordingly, this centre will
            serve as a catalyst for innovation, collaboration, and pedagogical
            advancement by nurturing a culture of continuous improvement among
            our faculty members by providing e a platform for sharing
            transformative teaching practices, conducting workshops, and
            organizing professional development programs to empower them with
            the latest methodologies and technologies in teaching.
            <br />
            <br />
            TLC also aims to facilitate the evaluation of teaching effectiveness
            and student learning outcomes by assisting the faculty in designing
            effective assessment strategies. Moving forward, TLC will be an
            inclusive space, embracing diversity and catering to the diverse
            learning needs of the students by adopting learner-centred
            approaches to enhance the quality of teaching-learning experiences
            for faculty and students alike. Through certificate programmes,
            faculty development programmes, workshops and seminars, the faculty
            members will be empowered to create engaging and inclusive learning
            environments that promote active participation, critical thinking,
            and student engagement. I encourage all faculty members to utilize
            the resources offered by TLC to transcend traditional disciplinary
            boundaries by engaging in interdisciplinary collaboration to shape
            the future of education. I am immensely ecstatic in expressing my
            conviction that the Teaching Learning Centre will become a beacon of
            knowledge, inspiration, and transformation in the academic
            environment.
          </div>
          <div
            style={{
              float: "left",
              textAlign: "end",
              fontWeight: "600",
              marginBlockStart: "1.5rem",
              lineHeight: "2.2rem",
            }}
          >
            <div
              style={{ float: "left", fontSize: "2.5rem", color: "#f7a300" }}
            >
              Satnam Singh Sandhu
            </div>
            <br />
            <div style={{ float: "left" }}>
              Chancellor, Chandigarh University
            </div>
          </div>
        </div>
        <div className="chm-img">
          <img
            src="https://cucet.cuchd.in/new-assets/img/chancellor-img.webp"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Chancelormsg;
