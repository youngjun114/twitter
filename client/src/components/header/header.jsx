import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header_left}>
        <Link to='/tweets'>
          <img
            src='images/header_logo.png'
            alt='logo'
            className={styles.logo}
          />
        </Link>
        <span className={styles.username}>@youngjun92</span>
      </div>
      <div className={styles.header_right}>
        <button className={styles.button}>All Tweets</button>
        <button className={styles.button}>My Tweets</button>
        <button className={styles.btn_logout}>Log Out</button>
      </div>
    </nav>
  );
};

export default Header;
