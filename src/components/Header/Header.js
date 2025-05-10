// Header.js
import React from 'react';
import headerIcon from '../../assets/images/header_icon.png';
import profileIcon from '../../assets/images/profile_icon.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={headerIcon} alt="Header Icon" className="header-icon" />
    <h1>Pick Your Pour</h1>
     <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
    </header>
  );
};

export default Header;

