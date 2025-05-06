import React from 'react';
import { FaGlassWhiskey, FaSearch, FaHome, FaComments, FaBarcode } from 'react-icons/fa';
import './BottomNav.css';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <a href="#my-bar" className="nav-item">
        <FaGlassWhiskey size={24} /> {/* Increased icon size */}
      </a>
      <a href="#search" className="nav-item">
        <FaSearch size={24} />
      </a>
      <a href="#home" className="nav-item">
        <FaHome size={24} />
      </a>
      <a href="#activity" className="nav-item">
        <FaComments size={24} />
      </a>
      <a href="#scan" className="nav-item">
        <FaBarcode size={24} />
      </a>
    </nav>
  );
}

export default BottomNav;