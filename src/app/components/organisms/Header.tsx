import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img 
        src="./crisp-logo.svg"
        alt="Crisp Tools"
        className={styles.logo}
      />
      
    </header>
  );
};

export default Header;