import React, { memo } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = memo(({ username, handleLogOut }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/'>Home</Link>
      </h1>
      <div className={styles.header_right}>
        <div className={styles.username}>@{username}</div>
        <button className={styles.button} onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
});

export default memo(Header);
