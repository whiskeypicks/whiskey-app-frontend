import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser } from 'react-icons/fa';
import './Header.css';

function Header({ showLogo = true, showProfile = true, showBack = false }) {
  const navigate = useNavigate();

  return (
    <header className="homepage-header">
      {showBack ? (
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft />
        </button>
      ) : (
        showLogo && <img src="/images/logo.png" alt="Whiskey Picks Logo" className="logo" />
      )}
      {showProfile && (
        <Link to="/profile" className="profile-button">
          <FaUser />
        </Link>
      )}
    </header>
  );
}

export default Header;