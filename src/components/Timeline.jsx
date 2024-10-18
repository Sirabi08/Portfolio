import React from "react";

function Timeline() {
  return (
    <section className="section timeline" id="timeline" aria-label="timeline">
      <div className="container">
        <p className="section-subtitle">Timeline</p>

        <h2 className="h2 section-title">Educational Journey</h2>

        <ul className="timeline-list">
        <li className="timeline-item">
            <h3 className="item-period">June, 2020 - May, 2021</h3>
            <p className="item-title">High School </p>
            <p className="item-address">Municipal girls Higher Secondary School</p>
          </li>
          <li className="timeline-item">
            <h3 className="item-period">August, 2022 - Present</h3>
            <p className="item-title">Bachelor of Engineering in Computer Science</p>
            <p className="item-address">Francis Xavier Engineering College, Tirunelveli</p>
          </li>

          <li className="timeline-item">
            <h3 className="item-period">June, 2024 </h3>
            <p className="item-title">Intern - Web Development and UI/UX Dsigning</p>
            <p className="item-address">Brassy Tecnologies, Tirunelveli</p>
          </li>

          <li className="timeline-item">
            <h3 className="item-period">September, 2024 - May, 2024</h3>
            <p className="item-title">Academic Project: E-Commerce Website</p>
            <p className="item-address">Francis Xavier Engineering College</p>
          </li>

    
         
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
