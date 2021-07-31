import React from 'react';
import styles from './sidebar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaSearch, FaTwitter } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';

const Sidebar = () => {
  return (
    <>
      <ul className={styles.sidebar_container}>
        <li>
          <Link to='/tweets' className={styles.sidebar_item}>
            <FaTwitter
              className={`${styles.sidebar_icon} ${styles.sidebar_logo}`}
            />
          </Link>
        </li>
        <li>
          <NavLink to='/' className={styles.sidebar_item}>
            <FaHome className={styles.sidebar_icon} />
            <span className={styles.sidebar_title}>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={styles.sidebar_item}>
            <FaSearch className={styles.sidebar_icon} />
            <span className={styles.sidebar_title}>Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={styles.sidebar_item}>
            <VscAccount className={styles.sidebar_icon} />
            <span className={styles.sidebar_title}>Account</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
