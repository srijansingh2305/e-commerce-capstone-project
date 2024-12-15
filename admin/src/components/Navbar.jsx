import React from 'react';
import { assets } from '../assets/assets';
import './Navbar.css';  // Import the CSS file

const Navbar = ({ setToken }) => {
  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={assets.logo} alt="Logo" />
      <button onClick={() => setToken('')} className="navbar-logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Navbar; // Exporting Navbar component
