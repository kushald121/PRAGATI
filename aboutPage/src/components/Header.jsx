import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
          />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/" onClick={toggleMenu}>About</Link>
          <Link to="/" onClick={toggleMenu}>Programs</Link>
          <Link to="/" onClick={toggleMenu}>Contact</Link>
        </nav>
      )}
    </>
  );
};

export default Header;