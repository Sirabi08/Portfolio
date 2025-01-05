import React from "react";

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio" aria-label="portfolio">
      <div className="container">
        <p className="section-subtitle">Portfolio</p>

        <h2 className="h2 section-title">Selected Works</h2>

        <ul className="has-scrollbar">
          <li className="scrollbar-item">
            <div className="card">
              <figure className="card-banner img-holder" style={{ "--width": "600", "--height": "675" }}>
                <img
                  src="./assets/images/flight-management.jpg" // Change to the correct image path
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="Flight Management System"
                  className="img-cover"
                />
              </figure>

              <a href="#https://github.com/Sirabi08/flight-reservation-system.git" className="card-content">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                <h3 className="h3 card-title">Flight Management System</h3>
                <p className="card-text">Web Application for Flight Booking and Management</p>
              </a>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="card">
              <figure className="card-banner img-holder" style={{ "--width": "600", "--height": "675" }}>
                <img
                  src="./assets/images/hospital-management.avif" // Change to the correct image path
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="Hospital Management System"
                  className="img-cover"
                />
              </figure>

              <a href="#https://github.com/Sirabi08/Hospital-Management-System.git" className="card-content">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                <h3 className="h3 card-title">Hospital Management System</h3>
                <p className="card-text">Comprehensive Solution for Patient and Staff Management</p>
              </a>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="card">
              <figure className="card-banner img-holder" style={{ "--width": "600", "--height": "675" }}>
                <img
                  src="./assets/images/ecommerce.avif" // Change to the correct image path
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="E-commerce Platform"
                  className="img-cover"
                />
              </figure>

              <a href="#https://github.com/Sirabi08/Ecommerce-React.git" className="card-content">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                <h3 className="h3 card-title">E-commerce Platform</h3>
                <p className="card-text">An Online Store for Buying and Selling Products</p>
              </a>
            </div>
          </li>

          <li className="scrollbar-item">
            <div className="card">
              <figure className="card-banner img-holder" style={{ "--width": "600", "--height": "675" }}>
                <img
                  src="./assets/images/portfolio-4.jpg"
                  width="600"
                  height="675"
                  loading="lazy"
                  alt="Project Title"
                  className="img-cover"
                />
              </figure>

              <a href="#" className="card-content">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                <h3 className="h3 card-title">Project Title</h3>
                <p className="card-text">Brief Description</p>
              </a>
            </div>
          </li>

          {/* Add more projects here as needed */}
          
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
