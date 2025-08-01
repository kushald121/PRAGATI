import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import uptoskillsLogo from "../assets/uptoskills-logo.png"; // Import the logo

const Footer = () => {
  return (
    <footer className="bg-[#2E4053] text-white py-2 px-3">

      {/* Scroll up button*/}
      <div className="flex justify-center mt-6">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="bg-slate-700 text-white p-3 rounded-full shadow-lg hover:bg-transparent transition"
    aria-label="Scroll to top">
 
    ↑
  </button>
</div>

      <p className="text-center text-sm text-gray-400">
        2025 © UptoSkills, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;