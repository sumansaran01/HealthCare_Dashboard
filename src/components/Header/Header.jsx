// Header component with logo, search bar (display only), notification icon, user profile, and add button

import React from 'react';
import { FiSearch, FiBell, FiPlus, FiUser } from 'react-icons/fi';
import '../../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1 className="logo">Health<span>care.</span></h1>
    </div>
    <div className="header-center">
      <div className="search-container">
        <FiSearch size={20} className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
    <div className="header-right">
      <FiBell size={20} className="notification-icon" />
      <div className="user-profile">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" className="user-avatar" />
        <span className="user-name">Dr. Smith</span>
      </div>
      <button className="add-button">
        <FiPlus size={20} />
      </button>
    </div>
  </header>
);

export default Header;
