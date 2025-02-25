import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        {/* Sección de enlaces */}
        <div className='footer__links'>
          <div className='footer__column'>
            <h3>Legal</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className='footer__column'>
            <h3>Customer</h3>
            <ul>
              <li>Career</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='footer__column'>
            <h3>Info</h3>
            <ul>
              <li>Blog</li>
              <li>Our Blog</li>
              <li>Location</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className='footer__subscribe'>
          <h3>Sign up for our newsletter</h3>
          <input type='email' placeholder='Your email' />
          <button>Subscribe</button>
          <div className='footer__social'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaLinkedin className='icon' />
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <p>© 2025 Monalisa Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


