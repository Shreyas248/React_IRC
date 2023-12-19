import React from 'react';
import '../assets/css/Sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
