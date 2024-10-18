import React from "react";

function News() {
  return (
    <section className="section news" id="news" aria-label="news">
      <div className="container">
        <p className="section-subtitle"> News</p>
        <h2 className="h2 section-title">Latest Updates </h2>

        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="card news-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "600", "--height": "675" }}
              >
                <img
                  src="./assets/images/blog-1.jpg"
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="Exciting New Internships Available!"
                  className="img-cover"
                />
              </figure>

              <a href="#" className="card-content">
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>

                <time className="card-text" dateTime="2023-09-10">
                  September 10, 2023
                </time>

                <h3 className="h3 card-title">
                  Exciting New Internships Available!
                </h3>
                <p className="card-description">
                  Discover a range of new internship opportunities for students looking to gain hands-on experience in various fields. Don’t miss out!
                </p>
              </a>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="card news-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "600", "--height": "675" }}
              >
                <img
                  src="./assets/images/blog-2.jpg"
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="Scholarship Opportunities for 2024"
                  className="img-cover"
                />
              </figure>

              <a href="#" className="card-content">
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>

                <time className="card-text" dateTime="2023-08-20">
                  August 20, 2023
                </time>

                <h3 className="h3 card-title">
                  Scholarship Opportunities for 2024
                </h3>
                <p className="card-description">
                  Learn about the latest scholarships available for students in 2024. Increase your chances of funding your education!
                </p>
              </a>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="card news-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "600", "--height": "675" }}
              >
                <img
                  src="./assets/images/blog-3.jpg"
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="Maximizing Your Online Learning Experience"
                  className="img-cover"
                />
              </figure>

              <a href="#" className="card-content">
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>

                <time className="card-text" dateTime="2023-07-15">
                  July 15, 2023
                </time>

                <h3 className="h3 card-title">
                  Maximizing Your Online Learning Experience
                </h3>
                <p className="card-description">
                  Check out our tips for making the most of your online courses, from time management strategies to engaging with instructors.
                </p>
              </a>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="card news-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "600", "--height": "675" }}
              >
                <img
                  src="./assets/images/blog-4.jpg"
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="Tech Workshops Coming Up This Fall!"
                  className="img-cover"
                />
              </figure>

              <a href="#" className="card-content">
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>

                <time className="card-text" dateTime="2023-06-30">
                  June 30, 2023
                </time>

                <h3 className="h3 card-title">
                  Tech Workshops Coming Up This Fall!
                </h3>
                <p className="card-description">
                  Join us for a series of workshops this fall focused on coding, design, and emerging technologies. Register today to secure your spot!
                </p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default News;
