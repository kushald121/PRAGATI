import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-items">
        <div className="info">
          <FaPhoneAlt className="icon" />
          <span>‪+91-96115 81279‬</span>
        </div>
        <div className="info">
          <FaEnvelope className="icon" />
          <span>contact@uptoskills.com</span>
        </div>
        <div className="info">
          <FaGlobe className="icon" />
          <span>www.uptoskills.com</span>
        </div>
        <div className="info">
          <FaMapMarkerAlt className="icon" />
          <span>Delhi, India</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;