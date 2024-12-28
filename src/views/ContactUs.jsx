import React from "react";
import '../assets/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <main className="main">
        <section id="contact" className="contact-form-section">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            luc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            luc.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                id="phone"
                className="form-input"
                placeholder="Your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Your email address"
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
