import React, { memo } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = memo(({ username }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/'>Home</Link>
      </h1>
      <div className={styles.username}>@{username}</div>
    </div>
  );
});

export default memo(Header);
