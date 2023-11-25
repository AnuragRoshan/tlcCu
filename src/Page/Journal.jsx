import React from "react";
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
  return (
    <>
      <Flowbanner name={page} />
      <div className="about-top">
        <div className="about-top-inner">
          <div style={{ flex: 2 }}>
            <Sidemenu menu={section} />
            {/* You can include a SideMenu component here if needed */}
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
