import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <NavLink to="/">All Tools</NavLink>
      <NavLink to="/color-tools">Color</NavLink>
      <NavLink to="/text-tools">Text</NavLink>
      <NavLink to="/conversion-tools">Conversion</NavLink>
      <NavLink to="/date-tools">Date</NavLink>
    </nav>
  );
};

export default Sidebar;