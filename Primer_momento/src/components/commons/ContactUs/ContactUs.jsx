import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-card contact-info-card">
        <h2>Contact Us</h2>
        <p className="contact-info"><strong>Location:</strong> Melbourne, Australia</p>
        <p className="contact-info"><strong>Address:</strong> 123 Example Street, Melbourne, VIC 3000</p>
        <p className="contact-info"><strong>Phone:</strong> <a href="tel:+903443564050">+90 (0) 344 356 4050</a></p>
        <p className="contact-info"><strong>Email:</strong> <a href="mailto:contact@monalisahotel.com">contact@monalisahotel.com</a></p>
        </div>
      <div className="contact-card">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="hotel-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096196!2d144.9556515153174!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4760f75d7b%3A0x4a8b0ee8c3b7e8e4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1641234567890"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
