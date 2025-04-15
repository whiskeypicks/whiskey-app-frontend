import React from 'react';
import { FaGlassWhiskey, FaSearch, FaHome, FaComments, FaBarcode } from 'react-icons/fa'; // Updated imports
import './BottomNav.css';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="#my-bar" className="nav-item">
        <FaGlassWhiskey />
      </a>
      <a href="#search" className="nav-item">
        <FaSearch />
      </a>
      <a href="#home" className="nav-item">
        <FaHome />
      </a>
      <a href="#activity" className="nav-item">
        <FaComments />
      </a>
      <a href="#scan" className="nav-item">
        <FaBarcode />
      </a>
    </nav>
  );
}

export default BottomNav;