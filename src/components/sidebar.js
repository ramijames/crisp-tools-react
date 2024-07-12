import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/color-tools">Color Tools</NavLink>
      <NavLink to="/text-tools">Text Tools</NavLink>
      <NavLink to="/style-tools">Style Tools</NavLink>
    </nav>
  );
};

export default Sidebar;