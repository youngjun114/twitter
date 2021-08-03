import React from 'react';
import styles from './avatar.module.css';

const Avatar = ({ url }) => {
  return (
    <img
      src={url ? url : 'images/avatar.png'}
      alt='avatar'
      className={styles.avatar}
    />
  );
};

export default Avatar;
