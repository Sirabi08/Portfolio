import React from "react";

function Skills() {
  return (
    <section
      className="section skills has-before"
      id="skills"
      aria-label="skills"
      style={{ backgroundImage: "url('./assets/images/skills-bg.png')" }}
    >
      <div className="container">
        <div className="skills-content">
          <p className="section-subtitle">Skills</p>

          <h2 className="h2 section-title">Programming Skills</h2>

          <p className="section-text">
            As a passionate student of web development, I am excited to dive into the world of modern programming languages and technologies. I am eager to learn and collaborate with others to create innovative web and app solutions that can make a difference. Together, we can explore new ideas and contribute to the ever-evolving digital landscape!
          </p>

          <ul className="skills-list">
            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">HTML & CSS</h3>
                <data className="skill-value" value="95%">
                  95%
                </data>
              </div>
              <div className="progress-box">
                <div className="progress" style={{ width: "95%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">JavaScript</h3>
                <data className="skill-value" value="80%">
                  80%
                </data>
              </div>
              <div className="progress-box">
                <div className="progress" style={{ width: "80%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">MySQL</h3>
                <data className="skill-value" value="90%">
                 80%
                </data>
              </div>
              <div className="progress-box">
                <div className="progress" style={{ width: "80%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="wrapper">
                <h3 className="skill-title">Java</h3>
                <data className="skill-value" value="65%">
                  65%
                </data>
              </div>
              <div className="progress-box">
                <div className="progress" style={{ width: "65%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="skills-banner has-before"></div>
      </div>
    </section>
  );
}

export default Skills;



