// Sidebar with static navigation links and "General" heading

import {
  FiHome,
  FiClock,
  FiCalendar,
  FiUserCheck,
  FiBarChart2,
  FiFileText,
  FiMessageSquare,
  FiHelpCircle,
  FiSettings,
} from 'react-icons/fi';
import '../../styles/Sidebar.css'; // Assuming you have a CSS file for styling

import React from 'react';
import navigationItems from '../../data/navigation.js';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-section">
      <h3 className="sidebar-title">General</h3>
      <nav className="sidebar-nav">
        {navigationItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon size={20} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  </aside>
);
export default Sidebar;
