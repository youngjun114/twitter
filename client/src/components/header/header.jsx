import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ username }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.username}>@{username}</div>
    </div>
  );
});

export default memo(Header);
