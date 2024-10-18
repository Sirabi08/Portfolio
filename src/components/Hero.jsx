import React from "react";

function Hero() {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <figure
          className="hero-banner img-holder has-before"
          style={{ "--width": "640", "--height": "840" }}
        >
          <img
           src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`}
            width="640"
            height="840"
            alt="siraj"
            className="img-cover"
          />
        </figure>

        <div className="hero-content">
          <p className="section-subtitle">Kathija Sirajun Nisha</p>

          <h1 className="h1 hero-title">web Developer </h1>

          <ul className="hero-list">
            <li>
              <a href="#" className="list-link">
                <span className="span">Web Development</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="list-link">
                <span className="span">Digital Marketing</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="list-link">
                <span className="span">Graphic Design</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </li>
          </ul>

          <ul className="exp-list">
 
  <li className="list-item">
    <strong className="strong">4+</strong>
    <span className="span">
      Programming Languages
      <br />
      Learned
    </span>
  </li>

  <li className="list-item">
    <strong className="strong">3+</strong>
    <span className="span">
      Projects Developed
    </span>
  </li>

 

</ul>
          <a href="#portfolio" className="slide-down-btn" aria-label="scroll down">
            <ion-icon name="arrow-down" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
