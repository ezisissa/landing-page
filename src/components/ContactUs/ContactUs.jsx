import React from "react";
import Headline from "../Headline/Headline";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Section Headline */}
      <Headline text="CONTACT US" />
      <h2>Get In Touch With Our Agents</h2>

      <div className="form-container">
        {/* Map and Contact Info */}
        <div className="map-container">
          {/* Embedded Google Map */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.053888615246!2d-80.14561678141006!3d25.939107693382102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2sde!4v1735749966091!5m2!1sen!2sde"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-block">
              <i
                className="fa-regular fa-phone-volume fa-xl"
                style={{ color: "#fe5525" }}
              ></i>
              <div className="contact-icon">
                <h3>010-020-0340</h3>
                <p>Phone Number</p>
              </div>
            </div>
            <div className="info-block">
              <i
                className="fa-regular fa-envelope fa-xl"
                style={{ color: "#fe5525" }}
              ></i>
              <div className="contact-icon">
                <h3>info@villa.co</h3>
                <p>Business Email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Your E-mail..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Subject..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
