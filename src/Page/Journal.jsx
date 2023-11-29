import React, { useEffect } from "react";
import journal from "../Data/journal";
import Sidemenu from "../Components/Sidemenu";
import Flowbanner from "../Components/Flowbanner";

const sections = Object.keys(journal);

const Journal = () => {
  const section = [
    "Broad Outline",
    "Target Audience",
    "Periodicity",
    "Indexing",
    "Policies",
    "Editorial Board",
  ];

  const page = "Journal";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div className="about-top-inner">
          <div style={{ flex: 2 }}>
            <Sidemenu menu={section} />
            {/* You can include a SideMenu component here if needed */}
            <div className="side-image">
              <div
                style={{
                  marginBlockEnd: "1rem",
                  height: "30%",
                  borderRadius: "1rem 1rem  1rem 1rem ",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    borderInlineEnd: "10px solid #2c3456",
                    borderBlockStart: "10px solid #2c3456",
                    // borderRadius: "6rem 0  0 6rem ",
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1569360556894-15dca0c6ff1a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  srcset=""
                  style={{
                    width: "100%",
                    // opacity: "0.7",
                    marginBlockStart: "1rem",
                    borderInlineEnd: "10px solid #2c3456",
                    borderBlockStart: "10px solid #2c3456",
                    // borderRadius: "6rem 0  0 6rem ",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="about-main-top">
            <div className="about-main-inner">
              {sections.map((section, index) => (
                <div id={index} className="about-element" key={index}>
                  <div className="about-head">{journal[section].title}</div>
                  <div className="about-desc">{journal[section].desc}</div>

                  {/* Check if the section has details */}
                  {journal[section].details && (
                    <div>
                      <div className="about-desc">Details:</div>
                      <ul>
                        {journal[section].details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Check if the section is "Policies" */}
                  {section === "policies" &&
                    Array.isArray(journal.policies) && (
                      <div>
                        <div className="about-head">Policies</div>
                        {/* <div className="about-desc">Policies:</div> */}
                        <ul>
                          {journal.policies.map((policy, policyIndex) => (
                            <li key={policyIndex}>
                              {/* <div>{policy.title}</div>
                        <p>{policy.desc}</p> */}
                              <div
                                style={{
                                  marginBlockStart: "1rem",
                                  color: "black",
                                  fontSize: "1.2rem",
                                }}
                              >
                                {policy.title}
                              </div>
                              <div className="about-desc">{policy.desc}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
