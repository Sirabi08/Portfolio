import React, { useState } from "react";

import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To store success/error messages
  const [loading, setLoading] = useState(false); // To manage loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state

    emailjs
      .send(
        "service_u4g9j6m", // Your EmailJS service ID
        "template_b9coi65", // Your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "XR4d3r64-V2-KUhtu" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  return (
    <>
      
      <section className="section contact" id="contact" aria-label="contact">
        <div className="container">
          <div className="contact-content">
            <p className="section-subtitle">Contact</p>
            <h2 className="h2 section-title">Get In Touch</h2>

            <p className="section-text">
              Please fill out the form on this section to contact with me. Or call
              between 9:00 a.m. and 8:00 p.m., Monday through Friday
            </p>

            <ul className="contact-list">
              <li className="contact-item">
                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                <address className="contact-link">
                 34 PT Nagar 2nd street Pettai Tvl, TN, India
                </address>
              </li>
              <li className="contact-item">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                <a href="tel:+6379203911" className="contact-link">
                  +6379203911
                </a>
              </li>
              <li className="contact-item">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                <a href="mailto:smith@gmail.com" className="contact-link">
                  sirabi08@gmail.com
                </a>
              </li>
          
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              aria-label="name"
              placeholder="Name"
              required
              className="input-field"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              aria-label="email"
              placeholder="Email"
              required
              className="input-field"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              aria-label="message"
              placeholder="Message"
              required
              className="input-field"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="submit-btn" disabled={loading}>
              <span className="span">{loading ? "Sending..." : "Submit"}</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>
          </form>

          {status && <p className="status-message">{status}</p>} {/* Status Message */}
        </div>
      </section>
      
    </>
  );
};

export default Contact;

