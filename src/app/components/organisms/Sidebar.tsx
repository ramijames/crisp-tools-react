import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <a href="#">Home</a>
      <a href="#">Color</a>
      <a href="#">Text</a>
      <a href="#">Styles</a>
    </nav>
  );
};

export default Sidebar;